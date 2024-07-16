import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import validator from 'validator';
import { createHmac } from 'crypto';

const secret = process.env.CSRF_SECRET as string;

if (!secret) {
  throw new Error('CSRF secret is not set');
}

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.NEXT_PUBLIC_GS_CLIENT_EMAIL,
    private_key: process.env.NEXT_PUBLIC_GS_PK?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

function verifyCsrfToken(csrfToken: string) {
  const expectedToken = createHmac('sha256', secret)
    .update(new Date().toISOString())
    .digest('hex');
  return csrfToken === expectedToken;
}

export async function POST(req: NextRequest) {
  const csrfToken = req.headers.get('csrf-token');
  const cookieCsrfToken = req.cookies.get('csrfToken');

  if (!csrfToken || !cookieCsrfToken || !verifyCsrfToken(csrfToken)) {
    return NextResponse.json({ success: false, message: 'Invalid CSRF token' }, { status: 403 });
  }

  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
  }

  const sanitizedEmail = validator.normalizeEmail(email);
  if (!sanitizedEmail || !validator.isEmail(sanitizedEmail)) {
    return NextResponse.json({ success: false, message: 'Invalid email address' }, { status: 400 });
  }

  const sanitizedMessage = validator.escape(message);
  const sanitizedName = validator.escape(name);

  try {
    const spreadsheetId = process.env.NEXT_PUBLIC_CONTACT_SHEET;
    const sheetName = 'Contact Messages';
    const timestamp = new Date().toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles', 
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:E`, 
      valueInputOption: 'RAW',
      requestBody: {
        values: [[timestamp, sanitizedName, sanitizedEmail, sanitizedMessage, 'NEW']],
      },
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error during contact form submission:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

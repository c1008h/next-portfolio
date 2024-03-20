"use client"
import Image from "next/image";
import { Navbar, Footer } from "@/components";
import Landing from "./Landing";
import Project from "./Project";
import Experience from "./Experience";
import Contact from './Contact';

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col">
    <main>
      <Landing />
      <Navbar/>
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

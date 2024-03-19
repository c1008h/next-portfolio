import React from 'react'

interface ButtonTemplateProps {
  title: string;
  action: () => void;
  btnStyle: string;
}
export default function ButtonTemplate({ btnStyle, title, action }: ButtonTemplateProps) {
  return (
    <button className={btnStyle} onClick={action}>
      {title}
    </button>
  )
}

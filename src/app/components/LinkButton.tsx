import React from "react";

type LinkButtonProps = {
  href?: string,
  target?: string,
  text: string,
  className?: string,
  variant?: string,
  onClick?: () => void,
}

export default function LinkButton({ href, target, text, className, variant = 'primary', onClick }: LinkButtonProps) {
  return (
    <a
      href={href}
      target={target}
      onClick={onClick}
      className={`px-6 py-3 text-lg font-semibold rounded-full text-white ${variant == 'primary' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-rose-500 hover:bg-rose-600'} transition duration-300 ${className}`}
    >
      {text}
    </a>
  );
}

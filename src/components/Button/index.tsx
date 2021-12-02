import React from "react";

export interface ButtonProps {
  children: React.ReactNode,
  bgColour?: string;
  size?: 'sm' | 'md' | 'lg';
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}


export const Button = ({children, bgColour = 'red', size = 'sm', handleClick} : ButtonProps) => {
  let scale = 1
  if (size === "sm") scale = 0.75
  if (size === "lg") scale = 1.5

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    minWidth: '80px',
    height: '44px',
    fontWeight: 700,
    backgroundColor: bgColour,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: 0,
  }

  return (
    <button style={style} onClick={handleClick}>{children}</button>
  )
}

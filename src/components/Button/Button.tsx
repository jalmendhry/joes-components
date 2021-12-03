import React, { useEffect } from "react";
import styled from 'styled-components';

import './button.scss';

export interface ButtonProps {
  children: React.ReactNode,
  bgColour?: string;
  size?: 'sm' | 'md' | 'lg';
  handleClick?: () => void;
}

const Button = ({children, bgColour = 'red', size = 'sm', handleClick} : ButtonProps) => {

  useEffect(() => {
    console.log("Button component has rendered!")
  }, [])

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
    <StyledButton className="button" style={style} onClick={handleClick}>{children}</StyledButton>
  )
}

const StyledButton = styled.button`
  max-width: 10px;
`

export default Button;

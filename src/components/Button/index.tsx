import React from "react";
import styled from 'styled-components';

export interface ButtonProps {
  text: string;
  bgColour?: string;
  size?: 'sm' | 'md' | 'lg';
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}


export const Button = ({text, bgColour = 'red', size = 'sm', handleClick} : ButtonProps) => {
  let scale = 1
  if (size === "sm") scale = 0.75
  if (size === "lg") scale = 1.5

  return (
    <StyledButton bgColour={bgColour} scale={scale} onClick={handleClick}>{text}</StyledButton>
  )
}


interface StyleProps {
  bgColour: string;
  scale: number;
}

const StyledButton = styled.button<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  min-width: 80px;
  height: 44px;


  padding: ${(props: StyleProps) => (`${props.scale * 0.5}rem ${props.scale * 1}rem`)};
  background-color: ${(props: StyleProps) => (props.bgColour)};
`

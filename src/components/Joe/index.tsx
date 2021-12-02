import React from "react";

export interface JoeProps {
  name: string;
}

export const Joe = ({name} : JoeProps) => {
  return (
    <p>Hello, {name}!</p>
  )
}

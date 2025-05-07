import React from "react";

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "filled" | "outlined" | "filled-inactive" | "transparent";
  [props: string]: any;
}
const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <>
      <button className={variant ? variant : "filled"} {...props}>
        {children}
      </button>
    </>
  );
};

export default Button;

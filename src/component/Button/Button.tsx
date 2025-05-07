import React from "react";

export type Variant= "filled" | "outlined" | "filled-inactive" | "transparent";
interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variant;
  [props: string]: any;
}
const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <>
      <button className={variant || "filled"} {...props}>
        {children}
      </button>
    </>
  );
};

export default Button;

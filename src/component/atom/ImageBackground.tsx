import React from "react";
import "../../index.css";
interface ButtonProps {
  name?: string;
  size: "fullpages" | "manualy";
  inputSizeWidth: string;
  inputSizeHeight: string;
  radius: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Imagebackground = ({
  size = "fullpages",
  name,
  inputSizeWidth,
  inputSizeHeight,
  radius,
  ...props
}: ButtonProps) => {
  let Height = size === "fullpages" ? "h-[auto]" : `h-[${inputSizeHeight}]`;
  let Width = size === "fullpages" ? "w-[100%]" : `w-[${inputSizeWidth}]`;
  let Radius = radius === true ? "rounded-md" : "rounded-none";

  return (
    <img
      className={[Height, Width, Radius].join(" ")}
      {...props}
      src={require(`../../assets/img/${name}`)}
    />
  );
};

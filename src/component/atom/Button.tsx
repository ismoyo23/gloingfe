import React from "react";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "windows" | "phone";
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = true,
  size = "windows",
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "bg-[#4AC4DC]" : "bg-[#000000]";
  const Size = size === "windows" ? "w-[271px]" : "w-[210px]";
  const height = size === "windows" ? "h-[60px]" : "h-[50px]";
  return (
    <button
      type="button"
      className={[
        "rounded-none ",
        Size,
        height,
        mode,
        `font-['Montserrat']`,
        "text-[white]",
      ].join(" ")}
      {...props}
    >
      <p className="font-['Montserrat'] font-[16px]">{label}</p>
    </button>
  );
};

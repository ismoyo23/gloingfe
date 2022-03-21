interface TextProps {
  weight: any;
  size?:
    | "small-primary"
    | "intermediate-primary"
    | "medium-primary"
    | "intermediate-large-primary"
    | "large-primary"
    | "super-large-primary"
    | "small-default"
    | "intermediate-default"
    | "medium-default"
    | "intermediate-large-default"
    | "large-default"
    | "super-large-default"
    | "small-white"
    | "intermediate-white"
    | "medium-white"
    | "intermediate-large-white"
    | "large-white"
    | "super-large-white";
  label: any;
  font: string;
  styles: any[];
}

/**
 * Primary UI component for user interaction
 */
export const Text = ({
  weight = "normal",
  size,
  label = "coba",
  font = "Montserrat",
  styles,
  ...props
}: TextProps) => {
  let style = styles;
  switch (size) {
    case "small-primary":
      style.push(
        "text-[14px]",
        "text-[#4AC4DC]",
        `font-['${font}']`,
        `font-[1100]`
      );
      break;

    case "intermediate-primary":
      style.push(
        "text-[16px]",
        "text-[16px]",
        "sm:text[16px]",
        "md:text[16px]",
        "lg:text-[16px]",
        "text-[16px]",
        "text-[#4AC4DC]",
        `font-['${font}']`,
        `font-${weight}`
      );
      break;

    case "medium-primary":
      style.push(
        "text-[38px]",
        "text-[#4AC4DC]",
        `font-['${font}']`,
        `font-${weight}`
      );
      break;

    case "intermediate-large-primary":
      style.push(
        "text-[44px]",
        "text-[#4AC4DC]",
        `font-['${font}']`,
        `font-${weight}`
      );
      break;

    case "large-primary":
      style.push(
        "text-[42px]",
        "md:text-[72px]",
        "text-[#4AC4DC]",
        `font-['${font}']`,
        `font-${weight}`
      );
      break;

    case "super-large-primary":
      style.push(
        "text-[50px]",
        "iphone12promax:text-[40px]",
        "sm:text[40px]",
        "md:text[82px]",
        "lg:text-[82px]",
        "text-[#4AC4DC]",
        `font-['${font}']`,
        `font-${weight}`
      );
      break;

    case "small-default":
      style.push(
        "text-[14px]",
        "text-[#0A2B32]",
        `font-['${font}']`,
        `font-${weight}`
      );
      break;

    case "intermediate-default":
      style.push(
        "text-[16px]",
        "sm:text[16px]",
        "md:text[16px]",
        "lg:text-[16px]",
        "text-[#0A2B32]",
        `font-['${font}']`,
        `font-${weight}`
      );
      break;

    case "medium-default":
      style.push(
        "text-[20px]",
        "md:text-[38px]",
        "text-[#0A2B32]",
        `font-['${font}']`,
        `font-${weight}`
      );
      break;

    case "intermediate-large-default":
      style.push(
        "text-[24px]",
        "md:text-[44px]",
        "xs:text[24px]",
        "text-[#0A2B32]",
        `font-['${font}']`,
        `font-${weight}`
      );
      break;

    case "large-default":
      style.push(
        "text-[42px]",
        "iphone12promax:font-[42px]",
        "xs:font-[42px]",
        "md-font[72px]",
        "lg-font[72px]",
        "text-[#0A2B32]",
        `font-['${font}']`,
        `font-${weight}`
      );
      break;

    case "super-large-default":
      style.push(
        "text-[50px]",
        "iphone12promax:text-[40px]",
        "sm:text[40px]",
        "md:text[82px]",
        "lg:text-[82px]",
        "text-[#0A2B32]",
        `font-['${font}']`,
        `font-${weight}`
      );
      break;

    case "small-white":
      style.push(
        "text-[14px]",
        "text-[white]",
        `font-['${font}']`,
        `font-${weight}`
      );
      break;

    case "intermediate-white":
      style.push(
        "text-[14px]",
        "text-[white]",
        "sm:text[18px]",
        "md:text[18px]",
        "lg:text-[18px]",
        `font-['${font}']`,
        `font-${weight}`
      );
      break;

    case "medium-white":
      style.push(
        "text-[20px]",
        "md:text-[38px]",
        "text-[white]",
        `font-['${font}']`,
        `font-${weight}`
      );
      break;

    case "intermediate-large-white":
      style.push(
        "text-[24px]",
        "md:text-[44px]",
        "xs:text[24px]",
        "text-[white]",
        `font-['${font}']`,
        `font-${weight}`
      );
      break;

    case "large-white":
      style.push(
        "text-[42px]",
        "md:text-[72px]",
        "text-[white]",
        `font-['${font}']`,
        `font-${weight}`
      );
      break;

    case "super-large-white":
      style.push(
        "text-[40px]",
        "iphone12promax:text-[40px]",
        "sm:text[40px]",
        "md:text[82px]",
        "lg:text-[82px]",
        "text-[white]",
        `font-['${font}']`,
        `font-${weight}`
      );
      break;

    default:
  }

  return (
    <p {...props} className={style.join(" ")}>
      {label}
    </p>
  );
};

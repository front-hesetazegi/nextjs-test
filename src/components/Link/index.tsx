import arrowBlack from "@/../public/image/arrow-black.svg";
import arrowGreen from "@/../public/image/arrow-green.svg";
import arrowWhite from "@/../public/image/arrow-white.svg";
import Image from "next/image";
import { FC } from "react";

// Define the possible variants for the link
type LinkProps = {
  variant:
    | "simpleBlack"
    | "simpleWhite"
    | "simpleGreen"
    | "green"
    | "green2"
    | "black"
    | "black2"
    | "white"
    | "white2";
  label: string;
  link: string;
};

// Link component
const Link: FC<LinkProps> = ({ variant, label, link }) => {
  // Define an object mapping each variant to a corresponding class
  const variantClasses: Record<string, string> = {
    simpleBlack: "text-black",
    simpleWhite: "text-white",
    simpleGreen: "text-green",
    green: "text-black",
    green2: "text-white",
    black: "text-black",
    black2: "text-black",
    white: "text-white",
    white2: "text-white",
  };

  const linkClass = variantClasses[variant] || "text-black";

  const src = ["white", "black", "simpleGreen"].includes(variant)
    ? arrowGreen
    : ["white2", "green", "simpleBlack"].includes(variant)
    ? arrowBlack
    : arrowWhite;

  const imageBg = variant.includes("white")
    ? "bg-white"
    : variant.includes("black")
    ? "bg-dark"
    : "bg-green";

  return (
    <a
      href={link}
      className={`flex items-center gap-[15px] text-xl ${linkClass}`}
    >
      {label}
      <div
        className={
          variant.includes("simple")
            ? ""
            : `w-[41px] h-[41px] rounded-full ${imageBg} justify-center flex items-center`
        }
      >
        <Image src={src} alt="arrow icon" />
      </div>
    </a>
  );
};

export default Link;

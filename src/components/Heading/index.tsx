import React from "react";

// Define the possible variants for the heading
type HeadingProps = {
  label: string;
  variant: "green" | "dark" | "white";
  style?: any;
};

// Heading component
const Heading: React.FC<HeadingProps> = ({ label, variant, style }) => {
  const variantClasses: Record<string, string> = {
    green: "text-black bg-green",
    dark: "text-white bg-dark",
    white: "text-black bg-white ",
  };

  const headingClass = variantClasses[variant] || "text-black";

  return (
    <h2
      className={`font-medium text-[2.5rem] px-2 ${headingClass}`}
      style={style}
    >
      {label}
    </h2>
  );
};

export default Heading;

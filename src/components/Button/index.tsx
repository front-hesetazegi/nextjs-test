import { FC } from "react";

interface PropsTypes {
  variant: "primary" | "secondary" | "tertiary";
  label: string;
}

const Button: FC<PropsTypes> = ({ label, variant }) => {
  const variants = {
    primary: "bg-dark text-white",
    secondary: "border-dark border text-black",
    tertiary: "bg-green text-black",
  };

  return (
    <button className={`py-5 px-9 rounded-[14px] ${variants[variant]}`}>
      {label}
    </button>
  );
};

export default Button;

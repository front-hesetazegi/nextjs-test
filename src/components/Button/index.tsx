import { FC } from "react";

interface PropsTypes {
  variant: "primary" | "secondary" | "tertiary";
  label: string;
  onClick?: () => void;
}

const Button: FC<PropsTypes> = ({ label, variant, onClick }) => {
  const variants = {
    primary: "bg-dark text-white border-none",
    secondary: "text-black border-dark border",
    tertiary: "bg-green text-black border-none",
  };

  return (
    <button
      className={`py-5 px-9 rounded-[14px] w-fit ${variants[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

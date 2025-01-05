import Heading from "@/components/Heading";
import Link from "@/components/Link";
import { FC, ReactNode } from "react";

type PropTypes = {
  title: string;
  link: string;
  variant: "grey" | "green" | "dark";
  image: ReactNode;
  linkLabel: string;
};

const ServiceCard: FC<PropTypes> = (props) => {
  const { link, title, variant, image, linkLabel } = props;

  const variants = {
    green: "bg-green",
    grey: "bg-grey",
    dark: "bg-dark",
  };

  return (
    <article
      className={`flex justify-between items-center p-[50px] select-none cursor-default rounded-[45px] ${variants[variant]}`}
    >
      <div className="flex flex-col justify-between h-full">
        <Heading
          label={title}
          variant={variant === "grey" ? "green" : "white"}
          style={{ fontSize: 30 }}
        />
        <Link
          label={linkLabel}
          variant={variant === "dark" ? "white2" : "black"}
          link={link}
        />
      </div>
      {image}
    </article>
  );
};

export default ServiceCard;

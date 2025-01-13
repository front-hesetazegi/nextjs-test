"use client";

import Link from "next/link";

interface IServiceCardProps {
  service: {
    id: number;
    title: string;
    logo: string;
    bg_color: string;
    arrow: string;
    title_bg_color: string;
    arrow_bg: string;
    link: string;
  };
}

const ServiceCard: React.FC<IServiceCardProps> = ({ service }) => {
  return (
    <div
      className="p-[50px] rounded-[45px] border-b-[5px] border border-solid border-black"
      style={{ backgroundColor: service.bg_color }}
    >
      <div className="w-full flex justify-between items-start gap-4 h-full">
        <div className="flex flex-col gap-1 w-full h-full justify-between">
          <h3
            className="text-[25px] font-medium px-4 py-2 rounded inline text-black"
            style={{ backgroundColor: service.title_bg_color }}
          >
            {service.title}
          </h3>

          <Link
            href={`/services/${service.link}`}
            className="flex items-center gap-2 font-medium text-[1rem]"
            style={{ color: service.arrow_bg }}
          >
            <img
              src={service.arrow}
              alt="Arrow"
              style={{ backgroundColor: service.arrow_bg }}
              className="p-2 rounded-full flex items-center justify-center"
            />
            Learn more
          </Link>
        </div>

        <div className=" w-full h-full">
          <img src={service.logo} alt="Card Logo" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

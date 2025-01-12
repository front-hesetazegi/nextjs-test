"use client";

import { useState } from "react";

interface IWorkingProcessBox {
  work: {
    id: string;
    title: string;
    description: string;
  };
}

const WorkingProcessBox: React.FC<IWorkingProcessBox> = ({ work }) => {
  const [boxOpen, setBoxOpen] = useState(false);

  return (
    <div className="p-[50px] rounded-[45px] border-b-[5px] border border-solid border-black">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className="text-[30px] font-medium text-black">{work.id}</h3>
          <h3 className="text-[25px] font-medium text-black">{work.title}</h3>
        </div>

        <div className="p-2 rounded-full border border-solid border-black flex items-center justify-center">
          <img src={boxOpen ? "/image/-.svg" : "/image/+.svg"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WorkingProcessBox;

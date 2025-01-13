"use client";

import { useState, useEffect, useRef } from "react";

interface IWorkingProcessBox {
  work: {
    id: string;
    title: string;
    description: string;
  };
}

const WorkingProcessBox: React.FC<IWorkingProcessBox> = ({ work }) => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState<string | null>(null);

  const refHeight = useRef<HTMLDivElement | null>(null);

  const toggleState = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (refHeight.current) {
      setHeightEl(`${refHeight.current.scrollHeight}px`);
    }
  }, [work]);

  useEffect(() => {
    if (work.id === "01") {
      setToggle(true);
    }
  }, []);

  return (
    <div
      className="p-[50px] rounded-[45px] border-b-[5px] border border-solid border-black"
      style={{ backgroundColor: toggle ? "#B9FF66" : "" }}
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className="text-[30px] font-medium text-black">{work.id}</h3>
          <h3 className="text-[25px] font-medium text-black">{work.title}</h3>
        </div>

        <div
          className="p-2 rounded-full border border-solid border-black bg-white flex items-center justify-center cursor-pointer w-10 h-10"
          onClick={toggleState}
        >
          <img src={toggle ? "/image/-.svg" : "/image/+.svg"} alt="" />
        </div>
      </div>

      <div
        className={toggle ? "question_more_show" : "question_more_hide"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        {work.description}
      </div>
    </div>
  );
};

export default WorkingProcessBox;

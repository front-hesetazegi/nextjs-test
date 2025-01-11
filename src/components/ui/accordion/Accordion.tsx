"use client";

import { useState } from "react";

interface AccordionProps {
    index: number;
    title: string;
    content: string;
    isOpen?: boolean;
}

export default function Accordion({
    index,
    title,
    content,
    isOpen = false,
}: AccordionProps) {
    const [open, setOpen] = useState(isOpen);
    return (
        <div className={`${open ? "bg-green" : "bg-grey"} p-8 rounded-3xl border boredr-black shadow-dark`}>
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
            >
                <div className="flex items-center gap-4">
                    <div className="text-lg">0{index + 1}</div>
                    <div>{title}</div>
                </div>
                <div className="size-8 rounded-full border text-3xl flex items-center justify-center">{open ? "-" : "+"}</div>
            </div>
            {open && <div className="border-t pt-4 mt-4">{content}</div>}
        </div>
    );
}

"use client";

import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const LINKS = [
    { label: "About us", link: "about-us" },
    { label: "Services", link: "services" },
    { label: "Use Cases", link: "use-cases" },
    { label: "Pricing", link: "pricing" },
    { label: "Blog", link: "blog" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="bg-white flex justify-between items-center mb-8 sticky top-0">
            <div>
                <Image
                    src="image/main-logo.svg"
                    alt="main-logo"
                    height={100}
                    width={100}
                    className="w-32"
                />
            </div>
            <div className="items-center gap-8 hidden md:flex">
                <ul className="flex items-center gap-8">
                    {LINKS.map((link) => (
                        <li key={link.link}>
                            <Link href={link.link}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
                <Button variant="secondary" label="Request a quote" />
            </div>
            <div className="block md:hidden" onClick={() => setIsOpen(true)}>
                📃
            </div>
            {isOpen && (
                <MobileMenu
                    LINKS={LINKS}
                    isOpen={isOpen}
                    closeMenu={() => setIsOpen(false)}
                />
            )}
        </header>
    );
}

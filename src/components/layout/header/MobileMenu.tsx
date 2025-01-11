import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function MobileMenu({ LINKS, isOpen,closeMenu }: any) {
    return (
        <div className={`fixed top-0 ${isOpen ? "left-0" : '-left-full'} left-0 bg-white h-screen w-screen flex flex-col items-center gap-8 transition-all`}>
            <div>
                <Image
                    src="image/main-logo.svg"
                    alt="main-logo"
                    height={100}
                    width={100}
                    className="w-32"
                />
            </div>
            {isOpen ? "test" : 'nots'}
            <div className="items-center gap-8">
                <ul className="flex items-center flex-col gap-8 mb-8">
                    {LINKS.map((link : any) => (
                        <li key={link.link}>
                            <Link href={link.link}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
                <Button variant="secondary" label="Request a quote" />
            </div>
            <div onClick={closeMenu}>
                close
            </div>
        </div>
    );
}

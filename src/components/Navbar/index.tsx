import Image from "next/image";
import logo from "../../../public/image/main-logo.svg";
import Link from "next/link";
import Button from "../Button";

function Navbar() {
  const links = [
    {
      name: "About us",
      href: "/1",
    },
    {
      name: "Services",
      href: "/2",
    },
    {
      name: "Use Cases",
      href: "/3",
    },
    {
      name: "Pricing",
      href: "/4",
    },
    {
      name: "Blog",
      href: "/5",
    },
  ];
  return (
    <div className="w-full sticky top-0 z-50">
      <div className="container mx-auto py-4 flex items-center justify-between px-16">
        <Link href="/">
          <Image src={logo} alt="logo" width={220} height={50} />
        </Link>
        <div className="flex items-center gap-10">
          {links.map((link) => (
            <Link className="text-xl" key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
          <Button label="Request a quote" variant="secondary"/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

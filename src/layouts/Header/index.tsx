import MainLogo from "@/../public/image/main-logo.svg";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full">
      <section>
        <Image
          src={MainLogo}
          alt={"Positive Logo"}
          width={219.54}
          height={56}
        />
      </section>

      <section className="flex gap-4 justify-between items-center">
        <Link href={"#about"}>About Us</Link>
        <Link href={"#services"}>Services</Link>
        <Link href={"#use-cases"}>Use Cases</Link>
        <Link href={"#pricing"}>Pricing</Link>
        <Link href={"#blog"}>Blog</Link>
        <Button variant={"secondary"} label={"Request a quote"} />
      </section>
    </header>
  );
}

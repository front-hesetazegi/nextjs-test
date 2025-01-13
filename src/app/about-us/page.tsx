import Link from "next/link";
import Button from "@/components/Button";

const AboutUsPage = () => {
  return (
    <main className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold">About Us</h1>
      <Link href="/">
        <Button variant="tertiary" label="Back" />
      </Link>
    </main>
  );
};

export default AboutUsPage;

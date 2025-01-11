import Card from "@/components/Card";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Search Engine Optimization",
      image: "/image/illustration.svg",
      backgroundColor: "gray",
      headingColor: "green",
    },
    {
      title: "Search Engine Optimization",
      image: "/image/illustration.svg",
      backgroundColor: "green",
      headingColor: "white",
    },
    {
      title: "Search Engine Optimization",
      image: "/image/illustration.svg",
      backgroundColor: "dark",
      headingColor: "white",
    },
    {
      title: "Search Engine Optimization",
      image: "/image/illustration.svg",
      backgroundColor: "gray",
      headingColor: "green",
    },
    {
      title: "Search Engine Optimization",
      image: "/image/illustration.svg",
      backgroundColor: "green",
      headingColor: "white",
    },
    {
      title: "Search Engine Optimization",
      image: "/image/illustration.svg",
      backgroundColor: "dark",
      headingColor: "green",
    },
  ];
  return (
    <div className="p-16 flex flex-col gap-24">
      <div className="flex items-center gap-3">
        <Heading
          label="Services"
          variant="green"
          style={{ width: "max-content" }}
        />
        <p>
          At our digital marketing agency, we offer a range of services to{" "}
          <br /> help businesses grow and succeed online. These services
          include:
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        {services.map((service, index) => (
          <Link href={`/${index + 1}`} key={index}>
            <Card
              title={service.title}
              image={service.image}
              variant={service.backgroundColor}
              titleVariant={service.headingColor}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

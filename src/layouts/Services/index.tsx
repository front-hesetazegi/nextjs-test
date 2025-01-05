import Illustration from "@/../public/image/Illustration.svg";
import ServiceCard from "@/components/Cards/ServiceCard";
import Image from "next/image";
import SectionLabel from "../SectionLabel";

export default function ServicesLayout() {
  return (
    <section>
      <div className="mb-24">
        <SectionLabel
          title={"Services"}
          description={
            "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
          }
        />
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-10">
        <ServiceCard
          title={"Search engine optimization"}
          link={"/search"}
          variant={"grey"}
          image={
            <Image
              src={Illustration}
              alt="Illustration"
              width={210}
              height={170}
            />
          }
          linkLabel={"Learn more"}
        />
        <ServiceCard
          title={"Pay-per-click advertising"}
          link={"/pay"}
          variant={"green"}
          image={
            <Image
              src={Illustration}
              alt="Illustration"
              width={210}
              height={170}
            />
          }
          linkLabel={"Learn more"}
        />
        <ServiceCard
          title={"Social Medi Marketing"}
          link={"/social"}
          variant={"dark"}
          image={
            <Image
              src={Illustration}
              alt="Illustration"
              width={210}
              height={170}
            />
          }
          linkLabel={"Learn more"}
        />
        <ServiceCard
          title={"Email Marketing"}
          link={"/email-marketing"}
          variant={"grey"}
          image={
            <Image
              src={Illustration}
              alt="Illustration"
              width={210}
              height={170}
            />
          }
          linkLabel={"Learn more"}
        />
        <ServiceCard
          title={"Content Creation"}
          link={"/content"}
          variant={"green"}
          image={
            <Image
              src={Illustration}
              alt="Illustration"
              width={210}
              height={170}
            />
          }
          linkLabel={"Learn more"}
        />
        <ServiceCard
          title={"Analytics and Tracking"}
          link={"/analytics"}
          variant={"dark"}
          image={
            <Image
              src={Illustration}
              alt="Illustration"
              width={210}
              height={170}
            />
          }
          linkLabel={"Learn more"}
        />
      </div>
    </section>
  );
}

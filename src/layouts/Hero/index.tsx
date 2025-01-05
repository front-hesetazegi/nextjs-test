import AmazonLogo from "@/../public/image/amazon-logo.svg";
import DribbbleLogo from "@/../public/image/dribbble-logo.svg";
import HeroImage from "@/../public/image/hero-img.svg";
import HubspotLogo from "@/../public/image/hubspot-logo.svg";
import NetflixLogo from "@/../public/image/netflix-logo.svg";
import NotionLogo from "@/../public/image/notion-logo.svg";
import ZoomLogo from "@/../public/image/zoom-logo.svg";
import Button from "@/components/Button";
import Image from "next/image";

export default function HeroLayout() {
  return (
    <section>
      <div className="flex justify-between items-start mb-[70px]">
        <div className="flex flex-col gap-9 max-w-[530px]">
          <h1 className="text-6xl font-medium">
            Navigating the digital landscape for success
          </h1>
          <p className="text-xl">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Button label="Book a consultation" variant="primary" />
        </div>

        <Image src={HeroImage} alt="hero image" />
      </div>

      <div className="flex justify-between">
        <Image
          src={DribbbleLogo}
          alt="Dribbble Logo"
          height={48}
          width={126.37}
        />
        <Image src={AmazonLogo} alt="Amazon Logo" height={48} width={124.11} />
        <Image
          src={HubspotLogo}
          alt="Hubspot Logo"
          height={48}
          width={128.63}
        />
        <Image src={NotionLogo} alt="Notion Logo" height={48} width={145.55} />
        <Image
          src={NetflixLogo}
          alt="Netflix Logo"
          height={48}
          width={125.24}
        />
        <Image src={ZoomLogo} alt="Zoom Logo" height={48} width={110.57} />
      </div>
    </section>
  );
}

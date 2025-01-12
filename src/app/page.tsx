import ServiceCard from "@/components/ServiceCard";
import WorkingProcessBox from "@/components/WorkingProcessBox";

const services = [
  {
    id: 1,
    title: "Search engine optimization",
    logo: "/image/Illustration.svg",
    bg_color: "#F3F3F3",
    arrow: "/image/arrow-green.svg",
    title_bg_color: "#B9FF66",
    arrow_bg: "#191A23",
    link: "search-engine-optimization",
  },
  {
    id: 2,
    title: "Pay-per-click advertising",
    logo: "/image/service2.svg",
    bg_color: "#B9FF66",
    arrow: "/image/arrow-green.svg",
    title_bg_color: "#F3F3F3",
    arrow_bg: "#191A23",
    link: "pay-per-click-advertising",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    logo: "/image/service3.svg",
    bg_color: "#191A23",
    arrow: "/image/arrow-black.svg",
    title_bg_color: "#F3F3F3",
    arrow_bg: "#F3F3F3",
    link: "social-media-marketing",
  },
  {
    id: 4,
    title: "Email Marketing",
    logo: "/image/service4.svg",
    bg_color: "#F3F3F3",
    arrow: "/image/arrow-green.svg",
    title_bg_color: "#B9FF66",
    arrow_bg: "#191A23",
    link: "email-marketing",
  },
  {
    id: 5,
    title: "Content Creation",
    logo: "/image/service5.svg",
    bg_color: "#B9FF66",
    arrow: "/image/arrow-green.svg",
    title_bg_color: "#F3F3F3",
    arrow_bg: "#191A23",
    link: "content-creation",
  },
  {
    id: 6,
    title: "Analytics and Tracking",
    logo: "/image/service6.svg",
    bg_color: "#191A23",
    arrow: "/image/arrow-black.svg",
    title_bg_color: "#B9FF66",
    arrow_bg: "#F3F3F3",
    link: "analytics-and-tracking",
  },
];

const working = [
  {
    id: "01",
    title: "Consultation",
    description: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
  },
  {
    id: "02",
    title: "Research and Strategy Development",
    description: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
  },
  {
    id: "03",
    title: "Implementation",
    description: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
  },
  {
    id: "04",
    title: "Monitoring and Optimization",
    description: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
  },
  {
    id: "05",
    title: "Reporting and Communication",
    description: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
  },
  {
    id: "06",
    title: "Continual Improvement",
    description: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
  },
];

export default function Home() {
  return (
    <main>
      <div className="w-full flex gap-6 items-start">
        <h2 className="bg-[#B9FF66] p-2 text-4xl font-medium rounded-md">
          Services
        </h2>

        <p className="w-[50%]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="w-full flex gap-6 items-center mt-4">
        <h2 className="bg-[#B9FF66] p-2 text-4xl font-medium rounded-md">
          Our Working Process
        </h2>

        <p className="w-[50%]">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <div className="container mx-auto py-10 flex flex-col gap-6">
        {working.map((work) => (
          <WorkingProcessBox key={work.id} work={work} />
        ))}
      </div>
    </main>
  );
}

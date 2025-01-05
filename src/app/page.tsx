import HeroLayout from "@/layouts/Hero";
import ServicesLayout from "@/layouts/Services";

export default function Home() {
  return (
    <div className="p-16 flex flex-col gap-24">
      <HeroLayout />
      <ServicesLayout />
      {/* 
      <UseCases />
      <Footer /> */}
    </div>
  );
}

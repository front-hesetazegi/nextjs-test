"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";

const ServiceDetailPage = () => {
  const params = useParams();
  const { service } = params;

  return (
    <main className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold text-black">Service: {service}</h1>
      <Link href="/">
        <Button variant="tertiary" label="Back" />
      </Link>
    </main>
  );
};

export default ServiceDetailPage;

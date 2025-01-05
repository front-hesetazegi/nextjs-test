import Heading from "@/components/Heading";

type PropTypes = {
  title: string;
  description: string;
};

export default function SectionLabel({ title, description }: PropTypes) {
  return (
    <div className="flex items-start gap-10">
      <Heading label={title} variant="green" />
      <p>{description}</p>
    </div>
  );
}

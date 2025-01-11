import Accordion from "@/components/ui/accordion/Accordion";
import Heading from "@/components/ui/heading/Heading";

const DATA = [
    { title: "test", content: "test" },
    { title: "test", content: "test" },
    { title: "test", content: "test" },
    { title: "test", content: "test" },
    { title: "test", content: "test" },
    { title: "test", content: "test" },
];

export default function WorkingProcess() {
    return (
        <div>
            <Heading
                title="Our Working Process "
                subTitle="Step-by-Step Guide to Achieving Your Business Goals"
            />
            <div className="flex flex-col gap-4">
                {DATA.map((item, index) => (
                    <Accordion
                        key={index}
                        index={index}
                        title={item.title}
                        content={item.content}
                        isOpen={index === 0 ? true : false}
                    />
                ))}
            </div>
        </div>
    );
}

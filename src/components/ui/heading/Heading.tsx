
interface HeadingProps {
    title: string;
    subTitle: string;
}

export default function Heading({ title, subTitle }: HeadingProps) {
    return (
        <div className="mb-16 flex items-center gap-8 py-8">
            <h2 className="leading-none font-bold text-[40px] bg-green px-2  rounded">{title}</h2>
            <p className="w-[53ch]">
               {subTitle}
            </p>
        </div>
    );
}

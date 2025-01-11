import Services from "@/components/layout/services/Services";
import WorkingProcess from "@/components/layout/workingProcess/WorkingProcess";

export default function Home() {
    return (
        <div className=" flex flex-col gap-24">
            <Services />
            <WorkingProcess />
        </div>
    );
}

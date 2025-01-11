import Heading from "@/components/ui/heading/Heading";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
    return (
        <div>
            <Heading
                title="Services"
                subTitle="At our digital marketing agency, we offer a range of
                    services to help businesses grow and succeed online. These
                    services include:"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="grid grid-cols-2 border border-black rounded-3xl shadow-[0_10px_rgba(0,0,0,1)] p-8">
                    <div className="flex flex-col justify-between">
                        <div>
                            <div>Search engine</div>
                            <div>Optimazation</div>
                        </div>
                        <Link href="#" className="flex items-center gap-4">
                            <div className="size-8 rounded-full bg-black p-2">
                                <Image
                                    src="image/arrow-green.svg"
                                    height={100}
                                    width={100}
                                    alt={""}
                                />
                            </div>
                            <div>Learn More</div>
                        </Link>
                    </div>

                    <Image
                        src="image/Illustration.svg"
                        height={200}
                        width={200}
                        alt="Illustration"
                        className="w-32"
                    />
                </div>
                <div className="grid grid-cols-2 border border-black rounded-3xl shadow-[0_10px_rgba(0,0,0,1)] p-8">
                    <div className="flex flex-col justify-between">
                        <div>
                            <div>Search engine</div>
                            <div>Optimazation</div>
                        </div>
                        <Link href="#" className="flex items-center gap-4">
                            <div className="size-8 rounded-full bg-black p-2">
                                <Image
                                    src="image/arrow-green.svg"
                                    height={100}
                                    width={100}
                                    alt={""}
                                />
                            </div>
                            <div>Learn More</div>
                        </Link>
                    </div>

                    <Image
                        src="image/Illustration.svg"
                        height={200}
                        width={200}
                        alt="Illustration"
                        className="w-32"
                    />
                </div>
                <div className="grid grid-cols-2 border border-black rounded-3xl shadow-[0_10px_rgba(0,0,0,1)] p-8">
                    <div className="flex flex-col justify-between">
                        <div>
                            <div>Search engine</div>
                            <div>Optimazation</div>
                        </div>
                        <Link href="#" className="flex items-center gap-4">
                            <div className="size-8 rounded-full bg-black p-2">
                                <Image
                                    src="image/arrow-green.svg"
                                    height={100}
                                    width={100}
                                    alt={""}
                                />
                            </div>
                            <div>Learn More</div>
                        </Link>
                    </div>

                    <Image
                        src="image/Illustration.svg"
                        height={200}
                        width={200}
                        alt="Illustration"
                        className="w-32"
                    />
                </div>
                <div className="grid grid-cols-2 border border-black rounded-3xl shadow-[0_10px_rgba(0,0,0,1)] p-8">
                    <div className="flex flex-col justify-between">
                        <div>
                            <div>Search engine</div>
                            <div>Optimazation</div>
                        </div>
                        <Link href="#" className="flex items-center gap-4">
                            <div className="size-8 rounded-full bg-black p-2">
                                <Image
                                    src="image/arrow-green.svg"
                                    height={100}
                                    width={100}
                                    alt={""}
                                />
                            </div>
                            <div>Learn More</div>
                        </Link>
                    </div>

                    <Image
                        src="image/Illustration.svg"
                        height={200}
                        width={200}
                        alt="Illustration"
                        className="w-32"
                    />
                </div>
                <div className="grid grid-cols-2 border border-black rounded-3xl shadow-[0_10px_rgba(0,0,0,1)] p-8">
                    <div className="flex flex-col justify-between">
                        <div>
                            <div>Search engine</div>
                            <div>Optimazation</div>
                        </div>
                        <Link href="#" className="flex items-center gap-4">
                            <div className="size-8 rounded-full bg-black p-2">
                                <Image
                                    src="image/arrow-green.svg"
                                    height={100}
                                    width={100}
                                    alt={""}
                                />
                            </div>
                            <div>Learn More</div>
                        </Link>
                    </div>

                    <Image
                        src="image/Illustration.svg"
                        height={200}
                        width={200}
                        alt="Illustration"
                        className="w-32"
                    />
                </div>
                <div className="grid grid-cols-2 border border-black rounded-3xl shadow-[0_10px_rgba(0,0,0,1)] p-8">
                    <div className="flex flex-col justify-between">
                        <div>
                            <div>Search engine</div>
                            <div>Optimazation</div>
                        </div>
                        <Link href="#" className="flex items-center gap-4">
                            <div className="size-8 rounded-full bg-black p-2">
                                <Image
                                    src="image/arrow-green.svg"
                                    height={100}
                                    width={100}
                                    alt={""}
                                />
                            </div>
                            <div>Learn More</div>
                        </Link>
                    </div>

                    <Image
                        src="image/Illustration.svg"
                        height={200}
                        width={200}
                        alt="Illustration"
                        className="w-32"
                    />
                </div>
                <div className="grid grid-cols-2 border border-black rounded-3xl shadow-[0_10px_rgba(0,0,0,1)] p-8">
                    <div className="flex flex-col justify-between">
                        <div>
                            <div>Search engine</div>
                            <div>Optimazation</div>
                        </div>
                        <Link href="#" className="flex items-center gap-4">
                            <div className="size-8 rounded-full bg-black p-2">
                                <Image
                                    src="image/arrow-green.svg"
                                    height={100}
                                    width={100}
                                    alt={""}
                                />
                            </div>
                            <div>Learn More</div>
                        </Link>
                    </div>

                    <Image
                        src="image/Illustration.svg"
                        height={200}
                        width={200}
                        alt="Illustration"
                        className="w-32"
                    />
                </div>
            </div>
        </div>
    );
}

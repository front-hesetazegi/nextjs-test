"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function page() {
    const params = useParams();

    return (
        <div className="flex items-center gap-8">
            <Link href="/" className="bg-green leading-none text-[32px] p-1 rounded font-bold">Back</Link>
            <div>
                page: <span>{params.pageId}</span>
            </div>
        </div>
    );
}

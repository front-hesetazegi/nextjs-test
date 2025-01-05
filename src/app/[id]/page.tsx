import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div>
      <Link href={"/"} className="mx-4">
        Go Back
      </Link>{" "}
      My Post: {id}
    </div>
  );
}

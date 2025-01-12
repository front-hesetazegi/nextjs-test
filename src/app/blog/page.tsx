import Link from "next/link";
import Button from "@/components/Button";

const BlogPage = () => {
  return (
    <main className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold">Blog</h1>
      <Link href="/">
        <Button variant="tertiary" label="Back" />
      </Link>
    </main>
  );
};

export default BlogPage;

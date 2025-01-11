import Link from "next/link"

function page({params: {id}}: any) {
  return (
    <div className="p-16 flex gap-4">
        {/* back button */}
        <Link href={"/"} className="bg-green text-2xl">Back</Link>
        <p>page: {id}</p>
    </div>
  )
}

export default page
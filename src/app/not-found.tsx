import { Typography } from "@/components/ui"
import Link from "next/link"

export default function NotFound() {
  return (
    <div>
      <Typography variant={"h2"}>Not Found</Typography>
      <Typography variant={"p"}>Could not find requested resource</Typography>
      <Link href="/">Return Home</Link>
    </div>
  )
}

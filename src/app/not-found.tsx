import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <section className="bg-muted flex min-h-screen items-center justify-center px-6 py-16">
      <div className="max-w-md space-y-4 text-center">
        <div className="relative mx-auto h-56 w-56">
          <Image
            src="/not-found.svg"
            alt="404 Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

        <Typography variant="h2" className="text-primary">
          Page Not Found
        </Typography>

        <Typography as="p" className="text-muted-foreground">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </Typography>

        <Button asChild>
          <Link href="/">Go back to homepage</Link>
        </Button>
      </div>
    </section>
  )
}

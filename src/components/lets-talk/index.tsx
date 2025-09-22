import { Typography } from "@/components/ui"
import Image from "next/image"

import LetsTalkForm from "./lets-talk-form"

export const LatsTalk = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container max-w-6xl">
        <div className="border-primary/10 grid grid-cols-1 overflow-hidden rounded-2xl border bg-[#eaf4ff] shadow-sm lg:grid-cols-2">
          {/* Left Side Form */}
          <LetsTalkForm />
          {/* Right Side Testimonial */}
          <div className="relative flex flex-col justify-center bg-blue-100 p-8 sm:p-10">
            <Typography variant="h3">Our Clients Say</Typography>

            <Typography variant={"mutedText"} className="my-4">
              Every impression counts when it comes to capturing customers
              online. Now more than ever, your online image is essential to the
              success of your business.
            </Typography>

            <div>
              <div className="flex items-center gap-2 font-medium">
                <Image
                  src="/icons/us.svg"
                  alt="USA Flag"
                  width={16}
                  height={12}
                />
                Alex Levin
              </div>
              <p className="text-muted-foreground mt-1 text-xs">
                Project Manager, Virgin Atlantic
              </p>
            </div>

            {/* Quotation mark */}
            <div className="text-primary/10 pointer-events-none absolute right-6 bottom-4 font-serif text-[120px] leading-none select-none">
              &rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

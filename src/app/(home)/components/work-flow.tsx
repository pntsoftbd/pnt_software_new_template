"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui"
import { Typography } from "@/components/ui/typography"
import Image from "next/image"

const steps = [
  {
    title: "Initial Planning",
    icon: "/workflow/initial-planning.svg",
    description:
      "We create detailed design and technical specifications — this is the roadmap.",
  },
  {
    title: "Wire-framing",
    icon: "/workflow/wireframing.svg",
    description:
      "Early visual layout of content and element structure for feedback.",
  },
  {
    title: "Copy & Graphics",
    icon: "/workflow/copy-graphics.svg",
    description:
      "We finalize UI content and graphics. Clients can provide these assets.",
  },
  {
    title: "Development",
    icon: "/workflow/development.svg",
    description:
      "Frontend & backend development begins after design confirmation.",
  },
  {
    title: "Testing",
    icon: "/workflow/testing.svg",
    description:
      "Performance, UX, device compatibility, and speed testing phase.",
  },
  {
    title: "Deployment & Optimization",
    icon: "/workflow/development-optimization.svg",
    description:
      "Final deployment on public domain, with optimizations and SEO.",
  },
  {
    title: "Support",
    icon: "/workflow/support.svg",
    description:
      "We offer 1-month free support and 1-year quality assurance warranty.",
  },
]

export const WorkFlow = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container">
        <Typography variant="h2" className="mb-12 text-center font-bold">
          Work Flow
        </Typography>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <TooltipProvider delayDuration={100}>
            <div className="relative flex flex-col items-center">
              {/* Line */}
              <div className="bg-primary/20 absolute top-12 right-0 left-0 z-0 hidden h-0.5 md:block" />

              {/* Step Circles with Tooltip */}
              <div className="relative z-10 grid w-full grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="group flex flex-col items-center text-center"
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="border-primary relative z-10 mb-4 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border-4 bg-white shadow-md transition-transform group-hover:scale-105">
                          <Image
                            src={step.icon}
                            alt={step.title}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent
                        side="bottom"
                        sideOffset={10}
                        align="center"
                        className="bg-primary-950 max-w-52 text-xs text-white"
                      >
                        {step.description}
                      </TooltipContent>
                    </Tooltip>

                    <Typography
                      variant="smallText"
                      className="text-muted-foreground group-hover:text-primary text-sm font-medium"
                    >
                      {step.title}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </TooltipProvider>
        </div>

        {/* Mobile View */}
        <div className="block lg:hidden">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border bg-white p-4 shadow-sm"
              >
                <div className="bg-muted flex h-12 min-w-[50px] items-center justify-center rounded-full p-2">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>
                <div>
                  <Typography
                    variant="h5"
                    className="mb-1 text-base font-semibold"
                  >
                    {step.title}
                  </Typography>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

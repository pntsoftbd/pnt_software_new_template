"use client"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { cn } from "@/lib/utils"
import {
  AppWindow,
  Bot,
  Globe,
  Layers,
  Palette,
  TerminalSquare,
} from "lucide-react"
import { useTypewriter } from "react-simple-typewriter"

const services = [
  {
    icon: <Globe className="text-secondary h-6 w-6" />,
    title: "Web Development",
    description: "We PeopleNTech is a leading custom website design company.",
  },
  {
    icon: <AppWindow className="text-secondary h-6 w-6" />,
    title: "Mobile App Development",
    description:
      "We choose the best app building technology depending on the client’s needs.",
  },
  {
    icon: <Palette className="text-secondary h-6 w-6" />,
    title: "UI UX Design Service",
    description:
      "Our effective UI/UX design visualizes the client’s vision and business flow.",
  },
  {
    icon: <TerminalSquare className="text-secondary h-6 w-6" />,
    title: "Software Consultancy",
    description:
      "Software consultancy does not mean only software development.",
  },
  {
    icon: <Layers className="text-secondary h-6 w-6" />,
    title: "Minimum Viable Product (MVP) Design",
    description:
      "At the very beginning stage, the arrangement of the MVP is important.",
  },
  {
    icon: <Bot className="text-secondary h-6 w-6" />,
    title: "Technical Support Team",
    description:
      "We provide dedicated technical support team for continuous assistance.",
  },
]

export const WeDo = () => {
  const [text] = useTypewriter({
    words: [
      "Web Development",
      "Mobile Apps",
      "Product Design",
      "MVP Building",
      "IT Services",
    ],
    loop: true,
    delaySpeed: 1500,
  })

  return (
    <section className="bg-primary-950 py-20 text-white">
      <div className="container mb-12 text-center">
        <Typography
          as="h2"
          className="text-primary-50 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          We Do <span className="text-secondary">{text}</span>
          <span className="animate-pulse text-white">|</span>
        </Typography>
        <p className="text-primary-200 mx-auto mt-3 max-w-2xl text-base">
          We build products that users love. Our services combine innovation,
          technology, and expertise to transform your business.
        </p>
      </div>

      <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="border-primary-100 hover:from-primary-200 hover:via-primary-100 hover:to-secondary-100 hover:text-primary-900 hover:ring-primary-300/60 flex h-full flex-col justify-between rounded-xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:shadow-xl hover:ring-1"
          >
            <div className="p-6 pb-4">
              <div className="bg-primary-50 text-secondary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full">
                {service.icon}
              </div>
              <Typography variant="h5" className="mb-2 font-semibold">
                {service.title}
              </Typography>
              <p className="text-muted-foreground text-sm leading-[1.6] transition-colors group-hover:text-white/80">
                {service.description}
              </p>
            </div>
            <div className="p-6 pt-0">
              <Button
                className="bg-secondary hover:bg-secondary-600 text-white transition"
                size="sm"
              >
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

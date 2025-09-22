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
    icon: <Globe className="text-secondary h-8 w-8" />,
    title: "Web Development",
    description: "We PeopleNTech is a leading custom website design company.",
  },
  {
    icon: <AppWindow className="text-secondary h-8 w-8" />,
    title: "Mobile App Development",
    description:
      "We choose the best app building technology depending on the client’s needs.",
  },
  {
    icon: <Palette className="text-secondary h-8 w-8" />,
    title: "UI UX Design Service",
    description:
      "Our effective UI/UX design visualizes the client’s vision and business flow.",
  },
  {
    icon: <TerminalSquare className="text-secondary h-8 w-8" />,
    title: "Software Consultancy",
    description:
      "Software consultancy does not mean only software development.",
  },
  {
    icon: <Layers className="text-secondary h-8 w-8" />,
    title: "Minimum Viable Product (MVP) Design",
    description:
      "At the very beginning stage, the arrangement of the MVP is important.",
  },
  {
    icon: <Bot className="text-secondary h-8 w-8" />,
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
    <section className="bg-primary-900 py-16 text-white lg:py-24">
      <div className="container mb-12 text-center">
        <Typography
          variant={"h2"}
          className="text-primary-50 font-bold tracking-tight"
        >
          We Do <span className="text-secondary">{text}</span>
          <span className="animate-pulse text-white">|</span>
        </Typography>
        <Typography className="text-primary-100 mx-auto max-w-2xl">
          We build products that users love. Our services combine innovation,
          technology, and expertise to transform your business.
        </Typography>
      </div>

      <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="border-primary-100 hover:from-primary-200 hover:via-primary-100 hover:to-secondary-100 hover:text-primary-900 hover:ring-primary-300/60 flex h-full flex-col justify-between rounded-xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:shadow-xl hover:ring-1"
          >
            <div className="p-6 pb-4">
              <div className="bg-primary-50 text-secondary mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
                {service.icon}
              </div>
              <Typography variant="h3" className="mb-2">
                {service.title}
              </Typography>
              <Typography
                as="p"
                className="text-muted-foreground transition-colors group-hover:text-white/80"
              >
                {service.description}
              </Typography>
            </div>
            <div className="p-6 pt-0">
              <Button className="bg-secondary hover:bg-secondary-600 text-white transition">
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

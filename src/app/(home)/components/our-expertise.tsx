"use client"

import { Typography } from "@/components/ui/typography"
import Image from "next/image"

const techStack = [
  { name: "PHP", icon: "/tech/16526897674510php.svg" },
  { name: "React", icon: "/tech/16526919973812reject.svg" },
  { name: "Kotlin", icon: "/tech/16691067831581kotlin.png" },
  { name: "Swift", icon: "/tech/16691064222145Swift_logo.svg.png" },
  { name: "Node.js", icon: "/tech/16691071619969nodejs.png" }, // make sure renamed!
  { name: "Laravel", icon: "/tech/16691073882266lasmlckms.png" },
]

export const OurExpertise = () => {
  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="container">
        <Typography variant="h2" className="mb-12 text-center font-bold">
          Our Expertise
        </Typography>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {techStack.map((tech, i) => (
            <div
              key={i}
              className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative mb-3 h-14 w-14">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="group-hover:text-primary text-sm font-medium text-gray-600 transition">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

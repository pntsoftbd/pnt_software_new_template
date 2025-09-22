"use client"

import { Typography } from "@/components/ui/typography"
import Image from "next/image"

const reviewBadges = [
  {
    name: "GoodFirms",
    logo: "/review-us/goodfirms.png",
    href: "https://www.goodfirms.co/company/peoplentech-software",
  },
  {
    name: "Clutch",
    logo: "/review-us/clutch.png",
    href: "https://clutch.co/review/1913540?utm_source=widget&utm_medium=1&utm_campaign=widget&utm_content=stars#reviews",
  },
  {
    name: "Wadline",
    logo: "/review-us/wadline.png",
    href: "https://wadline.com/peoplentech",
  },
  {
    name: "AppFutura",
    logo: "/review-us/appfutura.png",
    href: "https://www.appfutura.com/companies/peoplentech",
  },
]

export const ReviewUs = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container">
        <Typography variant="h2" className="mb-12 text-center">
          Review Us
        </Typography>

        <div className="grid grid-cols-1 items-center justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviewBadges.map((badge, index) => (
            <a
              key={index}
              href={badge.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center transition hover:scale-105"
            >
              <Image
                src={badge.logo}
                alt={badge.name}
                width={180}
                height={140}
                className="max-h-36 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

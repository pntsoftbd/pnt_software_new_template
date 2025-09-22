"use client"

import { Typography } from "@/components/ui"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"

import { useEffect, useRef } from "react"

const logos = [
  "16526886189319Bangladesh_univarcity.png",
  "16526888767476police.png",
  "16526889241993health-bd.png",
  "16526889584076un_mission-.png",
  "1652689015425Health_home.png",
  "16526891375027PDC.png",
  "16526892453473nrb.png",
  "16526892665216bdmir.png",
  "16526893158742c33L.png",
  "16526893425746bd tutorial.png",
  "16526893671457techlife.png",
  "16526893956065bd.png",
  "1652689420589new_products.png",
  "16526894628706amer.png",
  "16526894957544news18.png",
  "16526895239138MASTERs.png",
  "1652689588680accebtuate.png",
  "16526896216229KAZI_logs.png",
  "16527802152013nrbconnect.png",
]

export const FeaturedClients = () => {
  const timer = useRef<NodeJS.Timeout | null>(null)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 6,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 4, spacing: 12 },
      },
      "(max-width: 640px)": {
        slides: { perView: 2, spacing: 8 },
      },
    },
    renderMode: "performance",
    drag: true,
  })

  // Auto-play effect
  useEffect(() => {
    timer.current = setInterval(() => {
      if (slider.current) {
        slider.current.next()
      }
    }, 2500)

    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [slider])

  return (
    <section className="bg-primary-50/40 py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <Typography variant="h2" className="mb-2 font-bold">
            Featured Client
          </Typography>
          <Typography className="text-muted-foreground mb-6">
            We Believe, client satisfaction is the main KPI of growth. We always
            approach to build a close relationship with them. So that we tell
            them what they need before they realize it themselves.
          </Typography>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="keen-slider__slide flex items-center justify-center"
            >
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white p-4 shadow-md transition-transform hover:scale-105">
                <Image
                  src={`/features-client/${logo}`}
                  alt={`Client logo ${i + 1}`}
                  width={74}
                  height={74}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

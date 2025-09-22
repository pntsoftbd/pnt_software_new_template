"use client"

import { Typography } from "@/components/ui/typography"
import Image from "next/image"

const sisterConcerns = [
  { name: "Amar Quiz", logo: "/sister-concern/16526978804818amarquiz.png" },
  { name: "BD Politica", logo: "/sister-concern/16526979028025bdpolitica.png" },
  { name: "CARE 24/7", logo: "/sister-concern/16526979218602care247.png" },
  { name: "C3BL", logo: "/sister-concern/16526979383821cbbl.png" },
  { name: "FIIT", logo: "/sister-concern/16526979873585fiit02.png" },
  { name: "Frontia Limited", logo: "/sister-concern/1652779969579frontia.png" },
  { name: "GTS365", logo: "/sister-concern/1652780046233gts365.png" },
  {
    name: "Highend Luxury Property",
    logo: "/sister-concern/16527801109201highendluxuryproperty.png",
  },
  {
    name: "Higher Study USA",
    logo: "/sister-concern/16527801435722higherstudyusa.png",
  },
  {
    name: "Job N Resume",
    logo: "/sister-concern/16527801983830jobnresume.png",
  },
  { name: "PIIT", logo: "/sister-concern/16527802563077piit.png" },
  { name: "PNTDNS", logo: "/sister-concern/16527802828611pntdns.png" },
  {
    name: "Smartillusion",
    logo: "/sister-concern/16527803128990smartillusion.png",
  },
  {
    name: "Upscale Learning",
    logo: "/sister-concern/16527803707088upscalelearning.png",
  },
  {
    name: "VOLUMEcoder",
    logo: "/sister-concern/16527803898646volumecoder.png",
  },
  {
    name: "Washington University",
    logo: "/sister-concern/16602032546252washington university (1).png",
  },
]

export const SisterConcern = () => {
  return (
    <section className="bg-muted py-20">
      <div className="container">
        <Typography variant="h2" className="mb-12 text-center">
          Sister Concern
        </Typography>

        <div className="grid grid-cols-2 items-center justify-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {sisterConcerns.map((sister, index) => (
            <div
              key={index}
              className="group border-muted flex items-center justify-center rounded-xl border bg-white p-4 shadow-sm transition duration-300 hover:shadow-md"
            >
              <Image
                src={sister.logo}
                alt={sister.name}
                width={120}
                height={80}
                className="max-h-[60px] object-contain opacity-80 grayscale transition group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

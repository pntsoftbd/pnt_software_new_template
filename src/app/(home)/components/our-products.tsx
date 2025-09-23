"use client"

import { Typography } from "@/components/ui/typography"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"
import Link from "next/link"

import { useEffect, useState } from "react"

const products = [
  {
    title: "CRM Software",
    description:
      "We design custom CRM software for every king of business. Our design helps to maintain a high commercial relation ship with the client...",
    image: "/our-products/16568315486584CRM logo.png",
    href: "/product-details/client-relationship-management-crm-software",
  },
  {
    title: "Inventory Management System",
    description:
      "It's really hard to track and keeping record of details of a warehouse. Our custom Inventory management software will vanish all unnecessary headache ",
    image: "/our-products/16568312994674Inventory System logo.png",
    href: "/product-details/inventory-management-system",
  },
  {
    title: "School management software",
    description:
      "Our school management software is a powerful tool that is capable to manage all academic and official activity of an institute...",
    image: "/our-products/16568450817931School Management logo.png",
    href: "/product-details/school-management-software",
  },
  {
    title: "Retail POS Software",
    description:
      "Our POS software is a complete retail solution for any kind of business. with this software user will get inventory, sales, CRM and other basic soluti",
    image: "/our-products/16568454467781Retail POS logo.png",
    href: "/product-details/pos-software",
  },
]

export const OurProducts = () => {
  const [origin, setOrigin] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin)
    }
  }, [])

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1.1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.1, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.1, spacing: 24 },
      },
    },
  })

  return (
    <section className="bg-muted/50 py-16 lg:py-24">
      <div className="container">
        <Typography variant="h2" className="mb-12 text-center">
          Our Products
        </Typography>

        <div ref={sliderRef} className="keen-slider">
          {products.map((product, index) => (
            <div className="keen-slider__slide flex items-stretch" key={index}>
              <div className="flex h-full w-full flex-col gap-4 rounded-xl border bg-white p-6 text-center shadow-sm transition-all hover:shadow-md">
                <div className="flex h-40 justify-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <Typography variant="h3">{product.title}</Typography>
                <Typography variant={"mutedText"}>
                  {product.description}
                </Typography>
                <Link
                  href={`${origin}${product.href}`}
                  className="text-primary mt-auto inline-flex items-center gap-1 font-medium hover:underline"
                >
                  Know More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

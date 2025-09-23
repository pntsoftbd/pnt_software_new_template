"use client"

import { Typography } from "@/components/ui/typography"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"

const testimonials = [
  {
    name: "Diego Miguel",
    role: "Founder & CEO Of Frutas Y Verduras, Spains",
    avatar: "/1652943756489testimonial-profile.png",
    message:
      "When I was thinking of opening a website for my e-commerce business I came to know about PeopleNTech Ltd and let them accomplish the procedures of the website. They have completed all the procedures including picking a domain name, choosing domain hosting, and designing, Moreover, their rate is too affordable.",
  },
  {
    name: "Md. Imran Hossen",
    role: "Founder & CEO, Amedeo Exclusive",
    avatar: "/1652943756489testimonial-profile.png",
    message:
      "I worked with them recently on a Digital Campaign and found an enormous response from Customers. Good Wishes to them.",
  },
  {
    name: "Saif Mishu",
    role: "Founder, Bit BD",
    avatar: "/1652943756489testimonial-profile.png",
    message:
      "I have just expressed my idea and they come up with the best solution. It seems like my dream comes true. They are very professional. I consider them as all-time tech support for my company.",
  },
]

export const OurClientSays = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 0,
    },
  })

  return (
    <section className="bg-background pb-16 lg:pb-24">
      <div className="container max-w-3xl">
        <Typography variant="h2" className="mb-12 text-center">
          What Our Clients Say
        </Typography>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((t, i) => (
            <div key={i} className="keen-slider__slide">
              <div className="flex h-full flex-col justify-between rounded-xl border bg-white p-8 text-center shadow-sm transition hover:shadow-md">
                <div className="mb-4 flex justify-center">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={72}
                    height={72}
                    className="rounded-full border shadow"
                  />
                </div>
                <Typography className="text-primary font-semibold">
                  {t.name}
                </Typography>
                <p className="text-muted-foreground mb-4 text-sm">{t.role}</p>
                <p className="text-base leading-relaxed text-gray-600 italic">
                  {t.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

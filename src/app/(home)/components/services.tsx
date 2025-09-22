import { Card, CardContent, CardHeader } from "@/components/ui"
import { Typography } from "@/components/ui"
import Image from "next/image"

const services = [
  {
    title: "Enterprise",
    color: "from-blue-100 via-blue-50 to-white",
    border: "border-b-blue-500",
    icon: "/icons/enterprise.png",
    points: [
      "Managed IT Services",
      "Application modernization",
      "Dedicated development team",
    ],
  },
  {
    title: "SMB",
    color: "from-orange-100 via-orange-50 to-white",
    border: "border-b-orange-400",
    icon: "/icons/smb.png",
    points: [
      "IT Consulting",
      "IT Infrastructure Services",
      "Custom Software Development",
    ],
  },
  {
    title: "Startup",
    color: "from-green-100 via-green-50 to-white",
    border: "border-b-green-400",
    icon: "/icons/startup.png",
    points: ["Discovery phase", "MVP development", "CTO as a Service"],
  },
]

export default function ServicesCards() {
  return (
    <section className="container grid grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3 lg:py-16">
      {services.map((item, idx) => (
        <Card
          key={idx}
          className={`group border-muted relative overflow-hidden rounded-xl border text-center transition-all hover:shadow-md ${item.border} `}
        >
          {/* Gradient Overlay */}
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${item.color}`}
          />

          <div className="relative z-10">
            <CardHeader className="flex flex-col items-center space-y-4">
              <div className="bg-muted rounded-lg p-3">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                />
              </div>
              <Typography variant="h3">{item.title}</Typography>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="text-muted-foreground list-inside list-disc space-y-2 text-left">
                {item.points.map((point, i) => (
                  <li key={i} className="pl-1 text-base">
                    {point}
                  </li>
                ))}
              </ul>
            </CardContent>
          </div>
        </Card>
      ))}
    </section>
  )
}

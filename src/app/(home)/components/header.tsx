"use client"

import { Button, Typography } from "@/components/ui"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="bg-[url('/home-banner-bg.svg')] bg-cover bg-center bg-no-repeat py-8 lg:py-16">
      <section className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography variant="h1" className="mb-4">
            We <span className="text-secondary">Empower</span> <br />
            Your Business Through Our Services
          </Typography>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography className="mb-6">
              PeopleNTech supports global businesses and startups to transform
              ideas into excellent digital products that drive results.
            </Typography>

            <Link href="/contact-us">
              <Button size="lg">Start A Project</Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center"
        >
          <Image
            src="/vecteezy_team-business-analytics-data-email_8258372-0.svg"
            alt="banner"
            height={600}
            width={600}
          />
        </motion.div>
      </section>
    </header>
  )
}

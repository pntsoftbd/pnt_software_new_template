import { Typography } from "@/components/ui"
import Image from "next/image"
import Link from "next/link"
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa"

export const Footer = () => {
  return (
    <footer className="bg-primary-950 pt-10 pb-6 text-white lg:pt-16 lg:pb-8">
      <section className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Contact Form */}
        <div className="space-y-4 text-white">
          <Image src="/logo.png" alt="Logo" width={200} height={50} />
          <Typography variant="h5" className="font-semibold text-white">
            WHY CHOOSE US <span className="text-secondary">?</span>
          </Typography>
          <ul className="list-inside list-disc space-y-1 text-sm text-gray-300">
            <li>Custom Software Development</li>
            <li>24/7 Client Support</li>
            <li>Fast Turnaround Time</li>
            <li>Certified Engineering Team</li>
          </ul>
        </div>

        {/* Other Services */}
        <div>
          <Typography variant="h5" className="mb-4 font-semibold text-white">
            Other Services
          </Typography>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link href="/it-training" className="hover:text-white">
                IT Training
              </Link>
            </li>
            <li>
              <Link href="/business-hosting" className="hover:text-white">
                Business Hosting
              </Link>
            </li>
            <li>
              <Link href="/managed-it" className="hover:text-white">
                Managed IT
              </Link>
            </li>
            <li>
              <Link href="/domain" className="hover:text-white">
                Domain
              </Link>
            </li>
            <li>
              <Link href="/g-suit" className="hover:text-white">
                G-Suit
              </Link>
            </li>
            <li>
              <Link href="/virtual-server" className="hover:text-white">
                Virtual Server
              </Link>
            </li>
            <li>
              <Link href="/dedicated-server" className="hover:text-white">
                Dedicated Server
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow + Links */}
        <div>
          <Typography variant="h5" className="mb-4 font-semibold text-white">
            Follow us
          </Typography>
          <div className="mb-4 flex space-x-2">
            <Link
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
            >
              <FaFacebookF className="h-8 w-8 rounded-full bg-blue-600 p-2 text-white transition hover:bg-blue-700" />
            </Link>
            <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
            >
              <FaLinkedinIn className="h-8 w-8 rounded-full bg-blue-600 p-2 text-white transition hover:bg-blue-700" />
            </Link>
            <Link
              href="https://pinterest.com"
              aria-label="Pinterest"
              target="_blank"
            >
              <FaPinterestP className="h-8 w-8 rounded-full bg-blue-600 p-2 text-white transition hover:bg-blue-700" />
            </Link>
            <Link
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
            >
              <FaTwitter className="h-8 w-8 rounded-full bg-blue-600 p-2 text-white transition hover:bg-blue-700" />
            </Link>
          </div>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link href="/contact-us" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:text-white">
                Career
              </Link>
            </li>
            <li>
              <Link href="/site-map" className="hover:text-white">
                Site Map
              </Link>
            </li>
          </ul>
        </div>

        {/* Google Map */}
        <div>
          <Typography variant="h5" className="mb-4 font-semibold text-white">
            FIND US ON GOOGLE <span className="text-secondary">!</span>
          </Typography>
          <div className="w-full overflow-hidden rounded shadow-md">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=PeopleNTech&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="160"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="container mt-6 grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-5">
        {/* Bangladesh Office */}
        <div>
          <Typography
            variant="h5"
            className="mb-4 text-base font-semibold text-white lg:text-sm"
          >
            Bangladesh Office
          </Typography>
          <Typography className="mb-2 text-sm leading-relaxed text-white lg:text-xs">
            Good Luck Center, 151/7 Green Road, 8th Floor
            <br />
            Dhaka 1205, Bangladesh
          </Typography>
          <Typography className="text-sm leading-relaxed text-white lg:text-xs">
            <span className="block">
              Phone:{" "}
              <a
                href="tel:+8809613337448"
                className="underline hover:text-gray-300"
              >
                +880 9613 337448 EXT: 2020
              </a>
            </span>
            <span className="block">
              Email:{" "}
              <a
                href="mailto:Software@peoplentech.net"
                className="underline hover:text-gray-300"
              >
                Software@peoplentech.net
              </a>
            </span>
          </Typography>
        </div>

        {/* Virginia Office */}
        <div>
          <Typography
            variant="h5"
            className="mb-4 text-base font-semibold text-white lg:text-sm"
          >
            Virginia Office
          </Typography>
          <Typography className="mb-2 text-sm leading-relaxed text-white lg:text-xs">
            8133 Leesburg Pike, Suite 220
            <br />
            Vienna, VA 22182
          </Typography>
          <Typography className="text-sm leading-relaxed text-white lg:text-xs">
            <span className="block">
              Mobile:{" "}
              <a
                href="tel:1-855-562-7448"
                className="underline hover:text-gray-300"
              >
                1-855-562-7448
              </a>
            </span>
            <span className="block">E-Fax: (571) 766-2629</span>
            <span className="block">
              Email:{" "}
              <a
                href="mailto:info@peoplentech.com"
                className="underline hover:text-gray-300"
              >
                info@peoplentech.com
              </a>
            </span>
          </Typography>
        </div>

        {/* New York Office */}
        <div>
          <Typography
            variant="h5"
            className="mb-4 text-base font-semibold text-white lg:text-sm"
          >
            New York Office
          </Typography>
          <Typography className="mb-2 text-sm leading-relaxed text-white lg:text-xs">
            31-10 37th Avenue, Suite #300
            <br />
            Long Island City, NY 11101
          </Typography>
          <Typography className="text-sm leading-relaxed text-white lg:text-xs">
            <span className="block">
              Mobile:{" "}
              <a
                href="tel:1-855-562-7448"
                className="underline hover:text-gray-300"
              >
                1-855-562-7448
              </a>
            </span>
            <span className="block">E-Fax: (571) 766-2629</span>
            <span className="block">
              Email:{" "}
              <a
                href="mailto:info@peoplentech.com"
                className="underline hover:text-gray-300"
              >
                info@peoplentech.com
              </a>
            </span>
          </Typography>
        </div>

        {/* New Jersey Office */}
        <div>
          <Typography
            variant="h5"
            className="mb-4 text-base font-semibold text-white lg:text-sm"
          >
            New Jersey Office
          </Typography>
          <Typography className="mb-2 text-sm leading-relaxed text-white lg:text-xs">
            2709 Fairmount Ave, 2nd Floor
            <br />
            Atlantic City, NJ 08401
          </Typography>
          <Typography className="text-sm leading-relaxed text-white lg:text-xs">
            <span className="block">
              Mobile:{" "}
              <a
                href="tel:1-855-562-7448"
                className="underline hover:text-gray-300"
              >
                1-855-562-7448
              </a>
            </span>
            <span className="block">E-Fax: (571) 766-2629</span>
            <span className="block">
              Email:{" "}
              <a
                href="mailto:info@peoplentech.com"
                className="underline hover:text-gray-300"
              >
                info@peoplentech.com
              </a>
            </span>
          </Typography>
        </div>

        {/* Pennsylvania Office */}
        <div>
          <Typography
            variant="h5"
            className="mb-4 text-base font-semibold text-white lg:text-sm"
          >
            Pennsylvania (Upper Darby) Office
          </Typography>
          <Typography className="mb-2 text-sm leading-relaxed text-white lg:text-xs">
            6796 Market St, 2nd FL
            <br />
            Upper Darby, PA 19082
          </Typography>
          <Typography className="text-sm leading-relaxed text-white lg:text-xs">
            <span className="block">
              Mobile:{" "}
              <a
                href="tel:1-855-562-7448"
                className="underline hover:text-gray-300"
              >
                1-855-562-7448
              </a>
            </span>
            <span className="block">E-Fax: +1 571-766-2629</span>
            <span className="block">
              Email:{" "}
              <a
                href="mailto:info@peoplentech.com"
                className="underline hover:text-gray-300"
              >
                info@peoplentech.com
              </a>
            </span>
          </Typography>
        </div>
      </section>

      {/* Bottom Bar */}
      <section className="border-primary-900 border-t pt-6 text-center">
        <Typography className="container text-sm text-gray-400">
          © 2014 - {new Date().getFullYear()} PeopleNTech. All rights reserved.
          &nbsp; Terms & Conditions | Privacy Policy
        </Typography>
      </section>
    </footer>
  )
}

"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const menuItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    children: [
      { title: "Web Development", href: "/services/web-development" },
      {
        title: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
      { title: "Remote Support Team", href: "/services/remote-support-team" },
      { title: "UX-UI Design", href: "/services/ux-ui-design" },
      { title: "Software Consultancy", href: "/services/software-consultancy" },
      { title: "MVP Development", href: "/services/mvp-development" },
    ],
  },
  {
    title: "Products",
    children: [
      { title: "CRM Software", href: "/products/crm-software" },
      { title: "Inventory Software", href: "/products/inventory-software" },
      {
        title: "School Management Software",
        href: "/products/school-management-software",
      },
      { title: "POS Software", href: "/products/pos-software" },
    ],
  },
  {
    title: "About",
    children: [
      { title: "About Us", href: "/about" },
      { title: "Our Team", href: "/about/team" },
      { title: "Portfolio", href: "/about/portfolio" },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "IT Services",
    href: "/it-services",
  },
  {
    title: "IT Training",
    href: "/it-training",
  },
]

export function Navbar() {
  return (
    <section className="container py-4">
      {/* Desktop */}
      <div className="hidden items-center justify-between gap-4 lg:flex">
        <Link href="/">
          <Image src="/logo.png" width={150} height={100} alt="Logo" />
        </Link>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.children ? (
                  <>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-4">
                        <li>
                          {item.children.map((sub) => (
                            <NavigationMenuLink asChild key={sub.title}>
                              <Link href={sub.href}>{sub.title}</Link>
                            </NavigationMenuLink>
                          ))}
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    asChild
                    className={cn(navigationMenuTriggerStyle(), "text-base")}
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div>
          <Link href="/contact-us">
            <Button>Contact</Button>
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="block lg:hidden">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              width={150}
              height={100}
              alt="Logo"
              className="max-h-8 dark:invert"
            />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      src="/logo.png"
                      className="max-h-8 dark:invert"
                      alt="Logo"
                      width={150}
                      height={100}
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 p-4">
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col gap-4"
                >
                  {menuItems.map((item) =>
                    item.children ? (
                      <AccordionItem
                        value={item.title}
                        key={item.title}
                        className="border-b-0"
                      >
                        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="mt-2 flex flex-col gap-2">
                          {item.children.map((sub) => (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              className="px-3 py-1"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="text-md font-semibold"
                      >
                        {item.title}
                      </Link>
                    ),
                  )}
                </Accordion>

                <div className="flex flex-col gap-3">
                  <Button asChild>
                    <Link href="/contact-us">Contact</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  )
}

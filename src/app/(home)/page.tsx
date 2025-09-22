import { LatsTalk } from "@/components"

import { FeaturedClients } from "./components/featured-clients"
import { Header } from "./components/header"
import { OurClientSays } from "./components/our-client-says"
import { OurExpertise } from "./components/our-expertise"
import { OurProducts } from "./components/our-products"
import ServicesCards from "./components/services"
import { SisterConcern } from "./components/sister-concern"
import { WeDo } from "./components/we-do"
import { WorkFlow } from "./components/work-flow"

export default function Home() {
  return (
    <>
      <Header />
      <ServicesCards />
      <FeaturedClients />
      <WeDo />
      <OurExpertise />
      <WorkFlow />
      <OurProducts />
      <LatsTalk />
      <OurClientSays />
      <SisterConcern />
    </>
  )
}

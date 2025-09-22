import { FeaturedClients } from "./components/featured-clients"
import { Header } from "./components/header"
import ServicesCards from "./components/services"

export default function Home() {
  return (
    <>
      <Header />
      <ServicesCards />
      <FeaturedClients />
    </>
  )
}

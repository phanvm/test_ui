import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/App/Navbar"
import MainBanner from "../components/App/MainBanner"
import Features from "../components/App/Features"
import OurAcquaintance from "../components/App/OurAcquaintance"
import Footer from "../components/App/Footer"
import Faq from "../components/App/Faq"
import Contact from "../components/App/Contact"
import Partner from "../components/App/Partner"
import OpenWallet from "../components/App/OpenWallet"
const App = () => {
  return (
    <Layout>
      <Seo title="GtelPay" />
      <Navbar />
      <MainBanner />
      <Features />
      <OurAcquaintance />
      <Partner />
      {/* <AmazingDesign /> */}
      <Faq />
      <OpenWallet />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default App

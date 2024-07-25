import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/App/Navbar"
import ComingSoonContent from "../components/ComingSoon/ComingSoonContent"
import Footer from "../components/App/Footer"

const ComingSoon = () => {
  return (
    <Layout>

      <Seo title="Coming Soon" />

      <Navbar />

      <ComingSoonContent />

      <Footer />
      
    </Layout>
  )
}

export default ComingSoon

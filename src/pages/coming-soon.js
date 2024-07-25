import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/ComingSoon/Navbar"
import ComingSoonContent from "../components/ComingSoon/ComingSoonContent"
import Footer from "../components/ComingSoon/Footer"

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

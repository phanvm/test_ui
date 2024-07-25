import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import appStore from "../images/app-store.png"
import googlePlay from "../images/google-play.png"
import bannerAppImg from "../images/banner/8376504.png"

const DownloadApp = () => {
  const getMobileOperatingSystem = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone"
    }
    if (/android/i.test(userAgent)) {
      return "Android"
    }
    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS"
    }
    return "unknown"
  }
  React.useEffect(() => {
    const device = getMobileOperatingSystem()
    if(device == 'Android'){
      window.location.href = 'https://play.google.com/store/games?hl=en&gl=US'
    }else{
      window.location.href = 'https://apps.apple.com/vn/app/gtelpay-v%C3%AD-%C4%91i%E1%BB%87n-t%E1%BB%AD/id6503143483?l=vi'
    }
  }, [])
  return (
    <Layout>
      <Seo title="Gtelpay - Download GtelPay App" />
      <Navbar />
      <div className="app-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="app-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                  data-aos-once="true"
                >
                  VÍ ĐIỆN TỬ GTELPAY - DỄ DÀNG TRONG TẦM TAY
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                  data-aos-once="true"
                >
                  Ứng dụng thanh toán hàng đầu giúp bạn chuyển tiền và thanh
                  toán hàng ngàn tiện ích chỉ với vài chạm. <br></br>
                  Đơn giản – nhanh chóng – an toàn - tiện lợi!
                </p>

                <div
                  className="download-links"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                  data-aos-once="true"
                >
                  <ul>
                    <li>
                      <a
                        href="https://apps.apple.com/vn/app/gtelpay-v%C3%AD-%C4%91i%E1%BB%87n-t%E1%BB%AD/id6503143483?l=vi"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={appStore} alt="app Store" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://play.google.com/store/games?hl=en&gl=US"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={googlePlay} alt="google Play" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <div className="app-banner-img">
                <img src={bannerAppImg} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default DownloadApp

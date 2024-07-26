import * as React from "react"

import bannerAppImg from "../../images/banner/gtelpay-banner.png"
import video from "../../images/banner/banner_1.mp4"
const MainBanner = () => {
  const [domain, setDomain] = React.useState('gtelpay.vn')
  const [imageQRCode, setImageQRCode] = React.useState()
  React.useEffect(() => {
    const loadQRCode = async () => {
      import(`../../images/banner/qrcode_${domain}.png`).then(image => {
        setImageQRCode(image.default)
      })
    }
    loadQRCode()
  }, [domain])
  return (
    <>
      <div id="home" className="app-banner-area">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            opacity: 0.2,
          }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
                  VÍ ĐIỆN TỬ GTELPAY <br></br> DỄ DÀNG TRONG TẦM TAY
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
                      <h4>Trải nghiệm ngay</h4>
                    </li>
                  </ul>
                  <a href="#" target="_blank" rel="noreferrer">
                    <img
                      width={100}
                      src={imageQRCode}
                      alt="app Store"
                    />
                  </a>
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
    </>
  )
}

export default MainBanner

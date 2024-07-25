import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


import partnerImg0 from "../../images/partner/vietinbank.svg"
import partnerImg1 from "../../images/partner/acbbank.png"
import partnerImg2 from "../../images/partner/agribank.png"
import partnerImg3 from "../../images/partner/bacabank.png"
import partnerImg4 from "../../images/partner/bidvbank.png"
import partnerImg5 from "../../images/partner/dongabank.png"
import partnerImg6 from "../../images/partner/eximbank.png"
import partnerImg7 from "../../images/partner/kienlongbank.png"
import partnerImg8 from "../../images/partner/lienvietpostbank.png"
import partnerImg9 from "../../images/partner/mbbank.png"
import partnerImg10 from "../../images/partner/ncbbank.png"
import partnerImg11 from "../../images/partner/ocbbank.png"
import partnerImg12 from "../../images/partner/seabank.png"
import partnerImg13 from "../../images/partner/shb.png"
import partnerImg14 from "../../images/partner/techcombank.png"
import partnerImg15 from "../../images/partner/tpbank.png"
import partnerImg16 from "../../images/partner/vcb.png"
import partnerImg17 from "../../images/partner/vietabank.png"
import partnerImg18 from "../../images/partner/vpbank.png"
import partnerImg19 from "../../images/partner/vrbbank.png"

const Partner = () => {
  const [slides, setSlides] = React.useState([
    partnerImg0,
    partnerImg1,
    partnerImg2,
    partnerImg3,
    partnerImg4,
    partnerImg5,
    partnerImg6,
    partnerImg7,
    partnerImg8,
    partnerImg9,
    partnerImg10,
    partnerImg11,
    partnerImg12,
    partnerImg13,
    partnerImg14,
    partnerImg15,
    partnerImg16,
    partnerImg17,
    partnerImg18,
    partnerImg19,
  ])
  const groupedIcons = []
  for (let i = 0; i < slides.length; i += 12) {
    groupedIcons.push(slides.slice(i, i + 12))
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div id="doi-tac" className="consulting-partner-area ptb-50">
        <div className="container">
          <div className="app-section-title">
            <h2>NGÂN HÀNG LIÊN KẾT</h2>
          </div>
          <Slider
            {...settings}
            className="slider-fullwidth"
          >
            {groupedIcons.map((group, index) => (
              <div key={index} className="slide">
                <div className="icon-container">
                  {group.map((image, idx) => (
                    <div key={idx} className="icon-item">
                      {/* Thay thế bằng component hiển thị icon của bạn */}
                      <img src={image} alt="Image" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
          {/* <Swiper
            autoHeight={true}
            spaceBetween={10}
            pagination={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="consulting-partner-slider"
          >
            {slides.map((image, index) => {
              return(
                <SwiperSlide key={index}>
                <div className="partner-card">
                  <img src={image} alt="Image" />
                </div>
              </SwiperSlide>
              )
            })}
          </Swiper> */}
        </div>
      </div>
    </>
  )
}

export default Partner

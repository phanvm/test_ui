import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import screenshotImg1 from "../../images/choose/screenshots_1.png"
import screenshotImg2 from "../../images/choose/screenshots_2.png"
import screenshotImg3 from "../../images/choose/screenshots_3.png"
import screenshotImg4 from "../../images/choose/screenshots_4.png"
import screenshotImg5 from "../../images/choose/screenshots_5.png"

import chooseShape1 from "../../images/choose/choose-shape-1.png"

const Screenshots = () => {
  return (
    <>
      <div id="thiet-ke" className="choose-area bg-color-efedf0 ptb-100">
        <div className="container">
          <div className="app-section-title">
            <h2>Thiết kế của chúng tôi</h2>
          </div>

          <div className="class-for-frame">
            <Swiper
              spaceBetween={25}
              autoHeight={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
              modules={[Pagination]}
              className="choose-slider"
            >
              <SwiperSlide>
                <div className="choose-img">
                  <img src={screenshotImg1} alt="Image" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="choose-img">
                  <img src={screenshotImg2} alt="Image" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="choose-img">
                  <img src={screenshotImg5} alt="Image" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="choose-img">
                  <img src={screenshotImg4} alt="Image" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="choose-img">
                  <img src={screenshotImg3} alt="Image" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="choose-img">
                  <img src={screenshotImg1} alt="Image" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="choose-img">
                  <img src={screenshotImg2} alt="Image" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="choose-img">
                  <img src={screenshotImg5} alt="Image" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="choose-img">
                  <img src={screenshotImg4} alt="Image" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="choose-img">
                  <img src={screenshotImg3} alt="Image" />
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="choose-img-frame">
              <img src={chooseShape1} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Screenshots

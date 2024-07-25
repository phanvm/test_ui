import React, { useState } from "react"
import FsLightbox from "fslightbox-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import clientImg1 from "../../images/reviews/reviews-1.png"
import clientImg2 from "../../images/reviews/reviews-2.png"
import clientImg3 from "../../images/reviews/reviews-3.png"

import clientReviewBigImg from "../../images/reviews/reviews-img-4.png"

const ClientReviews = () => {
  const [toggler, setToggler] = useState(false)
  return (
    <>
      <div id="faq" className="app-reviews-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="app-reviews-content">
                <div className="app-reviews-section">
                  <h2>Câu hỏi thường gặp</h2>
                </div>
                <Swiper
                  autoHeight={true}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 6000,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="app-reviews-slider"
                >
                  <SwiperSlide>
                    <div className="app-reviews-box">
                      <div className="rating-star">
                        <h5>Có mở được hai Ví Gtelpay trên cùng CCCD không?</h5>
                      </div>
                      <p>
                      Hiện nay với mỗi người dùng Ví Gtelpay chỉ có thể mở được một tài khoản Ví điện tử.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="app-reviews-box">
                      <div className="rating-star">
                        <h5>
                        Tài khoản Ví Gtelpay có hỗ trợ sử dụng trên nhiều thiết bị khác không?</h5>
                      </div>
                      <p>
                      Hiện tại, ứng dụng Ví gtelpay chỉ hỗ trợ trên một thiết bị điện thoại của người dùng cá nhân. Tương lai, người dùng có thể sử dụng trên nhiều thiết bị khác nhau (theo thông báo từ Gtelpay)
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="app-reviews-box">
                      <div className="rating-star">
                        <h5>Làm sao để nạp tiền vào tài khoản GtelPay?</h5>
                      </div>
                      <p>
                      Từ màn hình chính người dùng vào mục nạp tiền, người dùng điền số tiền cần nạp hoặc chọn mệnh giá có sẵn, sau đó chọn tài khoản/thẻ ngân hàng sử dụng nạp và nhập mật khẩu để nạp tiền. Giao dịch nạp tiền thành công sẽ trừ tiền từ Tài khoản/thẻ ngân hàng và cộng vào tài khoản Ví giá trị tương ứng.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="app-reviews-box">
                      <div className="rating-star">
                        <h5>Làm sao để mua hàng thanh toán hoá đơn bằng Ví Gtelpay?</h5>
                      </div>
                      <p>
                      Từ màn hình chính người dùng vào chọn thanh toán điện nước, internet… bấm vào xem thêm để  hiển thị nhiều tiện ích thanh toán khác.Ví dụ chọn nạp tiền điện thoại trả trước Chọn nhà mạng, mệnh giá nạp, chọn tài khoản thanh toán và bấm thanh toán; nhập mật khẩu. Giao dịch thanh toán thành công sẽ trừ tiền từ tài khoản Ví điện tử và nạp vào thuê bao trả trước đã chọn khoản tiền tương ứng.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="app-reviews-box">
                      <div className="rating-star">
                        <h5>Làm sao để chuyển tiền giữa các Ví Gtelpay?</h5>
                      </div>
                      <p>
                      Từ màn hình chính người dùng vào mục chuyển tiền, chọn số tiền chọn số điện thoại, Số CCCD, Tên người cần chuyển đến, chọn số tiền chuyển và nhập mật khẩu xác thực . Giao dịch chuyển tiền thành công sẽ trừ tiền từ tài khoản Ví điện tử người gửi và cộng tiền vào Tài khoản Ví điện tử người nhận giá trị tiền chuyển tương ứng
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="app-reviews-img"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <img src={clientReviewBigImg} alt="Image" />
                <div className="video-player">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientReviews

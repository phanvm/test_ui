import * as React from "react"
import acquaintanceImg from "../../images/tien-ich.png"
const Features = () => {
  return (
    <>
      <div id="tien-ich" className="acquaintance-area ptb-100">
        <div className="container">
          <div className="app-section-title">
            {/* <span>Our App Feature</span> */}
            <h2>TIỆN ÍCH CỦA GTELPAY</h2>
            <h6>Ví điện tử GtelPay hỗ trợ khách hàng thanh toán không tiền mặt <br></br> với hàng ngàn ưu đãi</h6>
          </div>
          <div className="row ">
            <div className="col-lg-6">
              <div className="row">
                <div
                  className="col-lg-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  <div className="single-app-features-box">
                    <div className="features-content">
                      <i className="flaticon-wallet"></i>
                      <h3>Thanh toán Hoá đơn <br></br> ĐƠN GIẢN</h3>
                      <p>
                        Nạp tiền điện thoại, thanh toán hóa đơn Điện, Nước,
                        Internet, Truyền hình... với đa dạng Nhà cung cấp
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                  data-aos-once="true"
                >
                  <div className="single-app-features-box">
                    <div className="features-content">
                      <i className="flaticon-return"></i>
                      <h3>Liên kết Ngân hàng <br></br> NHANH CHÓNG</h3>
                      <p>
                        Hệ sinh thái đối tác với hơn 40 Ngân hàng cho phép khách
                        hàng liên kết và thanh toán
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-lg-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="600"
                  data-aos-once="true"
                >
                  <div className="single-app-features-box">
                    <div className="features-content">
                      <i className="flaticon-security"></i>
                      <h3>Bảo mật thông tin <br></br> AN TOÀN</h3>
                      <p>
                        Thông tin được bảo mật đa tầng với cơ chế bảo mật kép
                        mật khẩu thanh toán và OTP
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="600"
                  data-aos-once="true"
                >
                  <div className="single-app-features-box">
                    <div className="features-content">
                      <i className="flaticon-idea"></i>
                      <h3>Nhận ngay voucher cực kì <br></br> TIỆN LỢI</h3>
                      <p>
                        App mã liền tay, giảm ngay mọi giao dịch thanh toán cùng
                        GtelPay{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="acquaintance-img align-items-center"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
                data-aos-once="true"
                style={{alignContent: 'center'}}
              >
                <img src={acquaintanceImg} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="tien-ich" className="app-features-area pt-100 pb-70">
        <div className="container">
          <div className="app-section-title">
            <h2>Tiện ích của chúng tôi</h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200" 
              data-aos-once="true"
            >
              <div className="single-app-features-box">
                <div className="features-content">
                  <i className="flaticon-return"></i>
                  <h3>Thanh toán Hoá đơn ĐƠN GIẢN</h3>
                  <p>Nạp tiền điện thoại, thanh toán hóa đơn Điện, Nước, Internet, Truyền hình... với đa dạng Nhà cung cấp</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400" 
              data-aos-once="true"
            >
              <div className="single-app-features-box">
                <div className="features-content">
                  <i className="flaticon-return"></i>
                  <h3>Liên kết Ngân hàng NHANH CHÓNG</h3>
                  <p>Hệ sinh thái đối tác với hơn 40 Ngân hàng cho phép khách hàng liên kết và thanh toán</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600" 
              data-aos-once="true"
            >
              <div className="single-app-features-box">
                <div className="features-content">
                  <i className="flaticon-security"></i>
                  <h3>Bảo mật thông tin AN TOÀN</h3>
                  <p>Thông tin được bảo mật đa tầng với cơ chế bảo mật kép mật khẩu thanh toán và OTP</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600" 
              data-aos-once="true"
            >
              <div className="single-app-features-box">
                <div className="features-content">
                  <i className="flaticon-cogwheel"></i>
                  <h3>Nhận ngay voucher cực kì TIỆN LỢI</h3>
                  <p>App mã liền tay, giảm ngay mọi giao dịch thanh toán cùng GtelPay   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Features

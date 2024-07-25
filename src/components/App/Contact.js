import * as React from "react"

import newsletterImg1 from "../../images/newsletter-img.png"
import shape6 from "../../images/shape/shape-6.png"
import shape7 from "../../images/shape/shape-7.png"

const Contact = () => {
  return (
    <>
      <div
        id="lien-he"
        className="contact-and-subscribe-area bg-color-efedf0 pt-100 pb-70"
      >
        <div className="container">
          <div className="sass-section-title">
            <h2>LIÊN HỆ GTELPAY</h2>
          </div>

          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="contact-widget">
                <div className="widget-content">
                  <div className="contact-title">
                    <h3>Chăm sóc Khách hàng:</h3>
                  </div>

                  <div className="contact-form">
                    <div className="col-lg-12 col-sm-6">
                      <div className="get-in-touch">
                        <ul>
                          <li>
                            <i className="flaticon-map-1" color="#27A5DC"></i>
                            <p>
                              Địa chỉ: 103-105 Nguyễn Tuân, phường Thanh Xuân
                              Trung, quận Thanh Xuân, thành phố Hà Nội
                            </p>
                          </li>
                          <li>
                            <a href="tel:1900068879">
                              <i
                                className="flaticon-phone-call-2"
                                color="#27A5DC"
                              ></i>{" "}
                              Hotline: 1900.068.879 (Phí 1.000đ/phút)
                            </a>
                          </li>
                          <li>
                            <a href="mailto:cskh.gtelpay@gtel.vn">
                              {" "}
                              <i
                                className="flaticon-email"
                                color="#27A5DC"
                              ></i>{" "}
                              Email: cskh@gtelpay.vn
                            </a>
                          </li>
                          <li>
                            <a href="tel:02499996247">
                              <i
                                className="flaticon-phone-call-2"
                                color="#27A5DC"
                              ></i>{" "}
                              Tổng đài gọi ra: 024.9999.6247
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
              <div className="contact-widget">
                <div className="widget-content">
                  <iframe
                    title="google map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8903063132607!2d105.80166107472736!3d20.997033788868592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acbd8f7eeb9f%3A0xf27c5a523c4f28a6!2zMTAzIMSQLiBOZ3V54buFbiBUdcOibiwgVGhhbmggWHXDom4gVHJ1bmcsIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1721640499185!5m2!1svi!2s"
                    width="100%"
                    height="280"
                    marginHeight={280}
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

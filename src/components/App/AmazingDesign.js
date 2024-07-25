import * as React from "react"
import { Link } from "gatsby"

import appDesign from "../../images/design/8376210.png"
import flagImg from "../../images/flag/vietnam.png"
import shape9 from "../../images/shape/shape-9.png"

const AmazingDesign = () => {
  return (
    <>
      <div id="gioi-thieu" className="design-area bg-color-efedf0 ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="design-content"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <div className="design-title">
                  {/* <span>Cool & Amazing Design</span> */}
                  <h2>Chúng tôi cung cấp ứng dụng trung gian thanh toán</h2>
                </div>
                <div className="design-text">
                  <p>
                    Từ đầu thập niên trước, nhận thấy vai trò và tiềm năng hổ trợ của các tổ chức phi ngân hàng (non-bank) trong lĩnh vực thanh toán, hổ trợ các ngân hàng thúc đẩy thanh toán không dùng tiền mặt, \n
                    Trên cơ sở quy định về cấp phép, quản lý hoạt động cung ứng dịch vụ trung gian thanh toán quy định tại Luật ngân hàng Nhà Nước Việt Nam và Nghị định 101/2012/NĐ-CP của Chính phủ về thanh toán không dùng tiền mặt. 
                  </p>
                  <p>
                    Ngân hàng Nhà Nước Việt Nam đã ban hành khung khổ quản lý toàn diện hoạt động này bằng Thông tư 39/2014/TT-NHNN hướng dẫn về dịch vụ trung gian thanh toán, tạo tiền đề quan trọng cho sự phát triển lành mạnh, Có định hướng của các tổ chức này, 
                    Đóng góp tích cực vào phát triển thanh toán không dùng tiền mặt và mở rộng tài chính toàn diện.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="design-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <img src={appDesign} alt="Image" />

                <div className="doller">
                  <img src={flagImg} alt="Image" />
                  <h1>
                    352 <span className="target">k</span>
                  </h1>
                  <p>VNĐ</p>
                </div>

                <div className="design-shape">
                  <img src={shape9} alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AmazingDesign

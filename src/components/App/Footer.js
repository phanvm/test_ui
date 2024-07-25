import * as React from "react"
import { Link } from "gatsby"

import logo from "../../images/logo/logo.png"

const Footer = () => {
  return (
    <>
      <div className="app-footer-area pt-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-sm-6">
              <div className="logo-area style2">
                <Link to="/">
                  <img src={logo} className="logo-1" alt="Image" width={230} />
                </Link>
              </div>
            </div>

            <div className="col-lg-10 col-sm-6">
              <div className="footer-widjet style2 pl-30">
                <h3>Tổng công ty Công nghệ - Viễn thông Toàn cầu</h3>
                <div className="link-list">
                  <ul>
                    <li>
                      <Link to="#">
                      Địa chỉ: 103 -105 Nguyễn Tuân, Phường Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội.
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Giấy phép cung ứng dịch vụ Trung gian Thanh toán số: 41/GP-NHNN cấp ngày 29 tháng 8 năm 2023 bởi Ngân hàng Nhà nước Việt Nam.
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer

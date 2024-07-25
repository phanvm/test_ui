import * as React from "react"
import acquaintanceImg from "../../images/service_1.png"
const OurAcquaintance = () => {
  return (
    <>
      <div id="dich-vu" className="acquaintance-area bg-color-efedf0 ptb-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="acquaintance-img pr-20 align-items-center"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400" 
                data-aos-once="true"
              >
                <img src={acquaintanceImg} alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="acquaintance-content pl-20"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500" 
                data-aos-once="true"
              >
                <div className="acquaintance-title">
                  <h2>DỊCH VỤ CỦA GTELPAY</h2>
                  <p>
                  Trung gian thanh toán GtelPay ứng dụng công nghệ thanh toán hiện đại, cung cấp hạ tầng dịch vụ để hỗ trợ khách hàng quản lý và lên kế hoạch tài chính tối ưu 
                  </p>
                </div>

                <div className="acquaintance-list">
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="flaticon-wallet"></i>
                      </div>
                      <h3>1. Dịch vụ Ví điện tử</h3>
                      <p>
                      Cung cấp cho khách hàng một tài khoản điện tử định danh do GtelPay tạo lập để thanh toán các giao dịch trực tuyến không dùng tiền mặt.
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-artificial-intelligence"></i>
                      </div>
                      <h3>2. Dịch vụ cổng thanh toán</h3>
                      <p>
                      Cung ứng hạ tầng kỹ thuật, triển khai tích hợp nhanh chóng trên App/Website giữa Đơn vị chấp nhận thanh toán và Ngân hàng cho phép khách hàng thanh toán trực tuyến trong các giao dịch mua sắm trực tuyến, hoá đơn điện tử và các dịch vụ thanh toán điện tử khác.
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-money-management"></i>
                      </div>
                      <h3>3. Dịch vụ Thu hộ, Chi hộ</h3>
                      <p>
                      Cung cấp tài khoản ảo hỗ trợ khách hàng doanh nghiệp quản lý các khoản phải thu, cần chi qua hình thức thanh toán chuyển khoản ngân hàng và thực hiện báo cáo trạng thái giao dịch, dòng tiền một cách chính xác và thụ động.
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-data-management"></i>
                      </div>
                      <h3>4. Dịch vụ Gtel Pos</h3>
                      <p>
                      Cung cấp hệ thống POS hỗ trợ khách hàng quản lý cửa hàng nhờ đồng bộ tất cả thông tin bao gồm số lượng giao dịch bằng tiền mặt và chuyển khoản, chương trình ưu đãi, hàng tồn kho,...
                      </p>
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

export default OurAcquaintance

import * as React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

// import faqImg from "../../images/faq-img.png"
import qrcodeHdsv from "../../images/qrcode_hdsv.png"
import faqImg from "../../images/banner/8376504.png"
const OpenWallet = () => {
  const [faqDatas, setFaqData] = React.useState([
    {
      id: "a",
      title: "01. Tải ví GtelPay",
      description: "Tải Ví GtelPay tại App Store hoặc Google Play",
    },
    {
      id: "b",
      title: "02. Đăng ký sử dụng",
      description: "Nhập số điện thoại đăng ký và xác thực OTP được gửi",
    },
    {
      id: "c",
      title: "03. Định danh",
      description: "Xác thực khuôn mặt và CCCD định danh người dùng",
    },
    {
      id: "d",
      title: "04. Liên kết ngân hàng",
      description: "Chọn ngân hàng liên kết và xác nhận thông tin yêu cầu",
    },
  ])
  return (
    <>
      <div id="active-gtelpay-wallet" className="exchange-faq-area">
        <div className="container">
          <div className="exchange-section-title">
            <h2>KÍCH HOẠT NGAY VÍ GTELPAY</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="exchange-faq-img pl-20">
                <img src={faqImg} alt="Image" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="exchange-faq-content pr-20">
                <div className="faq-accordion">
                  <Accordion preExpanded={["a"]}>
                    {faqDatas.map((item, index) => {
                      return (
                        <AccordionItem key={index} uuid={item.id}>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              {item.title}
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>{item.description}</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      )
                    })}
                  </Accordion>
                  <h6 className="mt-30">Hướng dẫn mở ví Gtelpay</h6>
                  <img src={qrcodeHdsv} width={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default OpenWallet

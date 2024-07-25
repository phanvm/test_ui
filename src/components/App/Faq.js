import * as React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

import faqImg from "../../images/faq-img.png"
import qrcodeHdsv from "../../images/qrcode_hdsv.png"

const Faq = () => {
  const [faqDatas, setFaqData] = React.useState([
    {
      id: "a",
      title: "Có mở được 2 Ví Gtelpay trên cùng CCCD không?",
      description:
        "Với mỗi CCCD, khách hàng chỉ liên kết định danh cho 01 Ví Gtelpay duy nhất.",
    },
    {
      id: "b",
      title:
        "Làm sao để kích hoạt thành công Ví?",
      description:
        "Để kích hoạt ví thành công, khách hàng cần thực hiện 2 bước:  Định danh và Liên kết tài khoản ngân hàng ",
    },
    {
      id: "c",
      title: "Tài khoản Ví Gtelpay có hỗ trợ sử dụng trên nhiều thiết bị khác nhau hay không?",
      description:
        "Ví Gtelpay đang hỗ trợ truy cập và sử dụng trên thiết bị điện thoại điện thoại thông minh. ",
    },
    {
      id: "d",
      title: "Liên kết tài khoản ngân hàng với Ví Gtelpay có an toàn không?",
      description:
        "Ví Gtelpay hợp tác với Ngân hàng để xác nhận tài khoản đang liên kết là chính chủ. Trong quá trình sử dụng, mọi giao dịch đều được bảo mật đa tầng và phải được chính chủ xác nhận bằng mật khẩu hoặc mã OTP.",
    },
    {
      id: "e",
      title: "Một tài khoản Ví Gtelpay có thể liên kết được với bao nhiêu thẻ ngân hàng?",
      description:
        "Một tài khoản Ví có thể liên kết đến nhiều thẻ ngân hàng trong danh sách ngân hàng liên kết.",
    }
  ])
  return (
    <>
      <div id="cau-hoi-thuong-gap" className="exchange-faq-area ptb-100">
        <div className="container">
          <div className="exchange-section-title">
            <h2>CÂU HỎI THƯỜNG GẶP</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="exchange-faq-content pr-20">
                <div className="faq-accordion">
                  <Accordion preExpanded={["a"]}>
                    {faqDatas.map((item, index) => {
                      return (
                        <AccordionItem uuid={item.id} key={index}>
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
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="exchange-faq-img pl-20">
                <img src={faqImg} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq

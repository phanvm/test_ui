import * as React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo/logo.png"
const Navbar = () => {
  const [menu, setMenu] = React.useState(true)

  const toggleNavbar = () => {
    setMenu(!menu)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("navbar")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
  })

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-md navbar-light nav-style2">
        <div className="container-fluid">
          <Link to="/" onClick={toggleNavbar} className="navbar-brand">
            <img src={logo} alt="Logo" className="main-logo" width={130} />
            <img src={logo} alt="logo White" className="white-logo" />
          </Link>

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="#home"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Trang chủ
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="#tien-ich"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Tiện ích  
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="#dich-vu"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Dịch vụ
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="#doi-tac"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Đối tác
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="#cau-hoi-thuong-gap"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Câu hỏi thường gặp
                </Link>
                </li>
                <li className="nav-item">
                <Link
                  to="#lien-he"
                  activeClassName="active"
                  onClick={toggleNavbar}
                  className="nav-link"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          <div className="others-options d-flex align-items-center">
            {/* <div className="option-item">
              <Link to="#">Get Started</Link>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

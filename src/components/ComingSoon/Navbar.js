import React, { useState } from "react"
import { Link } from "gatsby"

import logo from "../../images/logo/logo.png"
import logoWhite from "../../images/logo/logo.png"

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

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false")
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal)
  }

  return (
    <>
      <nav
        id="navbar"
        className="navbar navbar-expand-lg navbar-light nav-style6"
      >
        <div className="container position-relative">
          <Link
            to="/"
            onClick={toggleNavbar}
            className="navbar-brand"
          >
            <img src={logo} alt="Logo" width={120} className="main-logo" />
            <img src={logoWhite} alt="logo White" className="white-logo" />
          </Link>
 
          <div className="others-options d-flex align-items-center right-15">
            <div className="option-item">
              <div className="modal-btn">
                <i
                  className="ri-menu-fill"
                  onClick={handleToggleSidebarModal}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Modal */}
      <div
        className={`sidebarModal modal right ${
          isActiveSidebarModal ? "" : "show"
        }`}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              onClick={handleToggleSidebarModal}
            >
              <i className="ri-close-line"></i>
            </button>

            <div className="modal-body">
              <Link to="/">
                <img src={logoWhite} className="main-logo" alt="logo" />
              </Link>

              <div className="sidebar-content">
                <h3>About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="sidebar-contact-info">
                <h3>Contact Information</h3>

                <ul className="info-list">
                  <li>
                    <i className="ri-phone-fill"></i>{" "}
                    <a href="tel:9901234567">+990-123-4567</a>
                  </li>

                  <li>
                    <i className="ri-mail-line"></i>
                    <a href="mailto:hello@klane.com">hello@klane.com</a>
                  </li>

                  <li>
                    <i className="ri-map-pin-line"></i> 413 North Las Vegas, NV
                    89032
                  </li>
                </ul>
              </div>

              <ul className="sidebar-social-list">
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flaticon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flaticon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/?lang=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flaticon-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/?lang=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flaticon-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

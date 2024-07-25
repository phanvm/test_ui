import * as React from "react"
import { Link } from "gatsby"

const MoreWithUs = () => {
  return (
    <>
      <div id="start" className="more-with-us-area pt-100">
        <div className="container">
          <div className="more-us-content">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="more-us-title">
                  <span>More With Us</span>
                  <h2>Create Your Account and Start Trading Today</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="more-us-btn">
                  <ul>
                    <li>
                      <Link to="#video" className="app-default-btn style3 btn">
                        Discover More
                      </Link>
                    </li>
                    <li>
                      <Link to="#pricing" className="app-default-btn style2 btn">
                        View Pricing
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

export default MoreWithUs

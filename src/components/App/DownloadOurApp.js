import * as React from "react"

import downloadAppImg from "../../images/download/download-img-1.png"
import downloadShapeImg1 from "../../images/download/download-shape-1.png"
import downloadShapeImg2 from "../../images/download/download-shape-2.png"
import downloadShapeImg3 from "../../images/download/download-shape-3.png"
import downloadShapeImg4 from "../../images/download/download-shape-4.png"
import downloadShapeImg5 from "../../images/download/download-shape-5.png"
import downloadShapeImg6 from "../../images/download/download-shape-6.png"

import appStoreImg from "../../images/app-store.png"
import googlePlayImg from "../../images/google-play.png"

const DownloadOurApp = () => {
  return (
    <>
      <div id="download" className="app-download-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="download-image-content">
                <div
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  <img src={downloadAppImg} alt="Image" />
                </div>

                {/* Shape Images */}
                <img
                  src={downloadShapeImg1}
                  className="dowload-shape-1"
                  alt="Image"
                />
                <img
                  src={downloadShapeImg2}
                  className="dowload-shape-2"
                  alt="Image"
                />
                <img
                  src={downloadShapeImg3}
                  className="dowload-shape-3"
                  alt="Image"
                />
                <img
                  src={downloadShapeImg4}
                  className="dowload-shape-4"
                  alt="Image"
                />
                <img
                  src={downloadShapeImg5}
                  className="dowload-shape-5"
                  alt="Image"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="download-content pl-20">
                <div className="download-title">
                  <span>Download Our App</span>
                  <h2>Get The App For Free And Start Now</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut
                  elit tellus, luc tus nec ullamcorper mattis, pulvinar dapibus
                  leo. Lorem ipsum dolor sit amet con Lorem ipsum dolor
                </p>
                <div className="download-links">
                  <ul>
                    <li>
                      <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={appStoreImg} alt="Image" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://play.google.com/store/games?hl=en&gl=US"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={googlePlayImg} alt="Image" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <img
            src={downloadShapeImg6}
            className="download-shape-6"
            alt="Image"
          />
        </div>
      </div>
    </>
  )
}

export default DownloadOurApp

import * as React from "react"

import teamImg1 from "../../images/team/team-1.png"
import teamImg2 from "../../images/team/team-2.png"
import teamImg3 from "../../images/team/team-3.png"
import teamImg4 from "../../images/team/team-4.png"
import shape13 from "../../images/shape/shape-13.png"

const OurTeam = () => {
  return (
    <>
      <div id="team" className="team-area pt-100 pb-70">
        <div className="container">
          <div className="app-section-title">
            <span>Our Team!</span>
            <h2>Meet Our Team Members</h2>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200" 
              data-aos-once="true"
            >
              <div className="single-team-card">
                <div className="team-image">
                  <img src={teamImg1} alt="Image" />
                </div>
                <div className="team-content">
                  <h3>
                    Cody Fisher <span>- CEO</span>
                  </h3>
                  <div className="social-links">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                          <i className="flaticon-facebook-1"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                          <i className="flaticon-twitter-3"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://google.com" target="_blank" rel="noreferrer">
                          <i className="flaticon-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://linkedin.com/?lang=en" target="_blank" rel="noreferrer">
                          <i className="flaticon-linkedin-1"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400" 
              data-aos-once="true"
            >
              <div className="single-team-card">
                <div className="team-image">
                  <img src={teamImg2} alt="Image" />
                </div>
                <div className="team-content">
                  <h3>
                    Emily Coper <span>- Designer</span>
                  </h3>
                  <div className="social-links">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                          <i className="flaticon-facebook-1"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                          <i className="flaticon-twitter-3"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://google.com" target="_blank" rel="noreferrer">
                          <i className="flaticon-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://linkedin.com/?lang=en" target="_blank" rel="noreferrer">
                          <i className="flaticon-linkedin-1"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600" 
              data-aos-once="true"
            >
              <div className="single-team-card">
                <div className="team-image">
                  <img src={teamImg3} alt="Image" />
                </div>
                <div className="team-content">
                  <h3>
                    Nick Obron <span>- Developer</span>
                  </h3>
                  <div className="social-links">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                          <i className="flaticon-facebook-1"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                          <i className="flaticon-twitter-3"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://google.com" target="_blank" rel="noreferrer">
                          <i className="flaticon-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://linkedin.com/?lang=en" target="_blank" rel="noreferrer">
                          <i className="flaticon-linkedin-1"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="800" 
              data-aos-once="true"
            >
              <div className="single-team-card">
                <div className="team-image">
                  <img src={teamImg4} alt="Image" />
                </div>
                <div className="team-content">
                  <h3>
                    Simmy Roy <span>- Manager</span>
                  </h3>
                  <div className="social-links">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                          <i className="flaticon-facebook-1"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                          <i className="flaticon-twitter-3"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://google.com" target="_blank" rel="noreferrer">
                          <i className="flaticon-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://linkedin.com/?lang=en" target="_blank" rel="noreferrer">
                          <i className="flaticon-linkedin-1"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            src={shape13}
            className="team-shape"
            alt="Image"
          />
        </div>
      </div>
    </>
  )
}

export default OurTeam

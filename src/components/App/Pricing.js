import * as React from "react"
import { Link } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

const Pricing = () => {
  return (
    <>
      <div
        id="pricing"
        className="app-pricing-area bg-color-efedf0 pt-100 pb-70"
      >
        <div className="container">
          <div className="app-section-title">
            <span>Flexible Plans</span>
            <h2>Transparent Pricing For You</h2>
          </div>

          <Tabs className="pricing-tabs">
            <TabList>
              <Tab>Monthly</Tab>
              <Tab>Yearly</Tab>
            </TabList>

            <TabPanel>
              <div className="row align-items-center justify-content-center">
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <div className="app-single-pricing-card">
                    <div className="pricing-top-content">
                      <div className="icon">
                        <i className="flaticon-basic-shapes"></i>
                      </div>
                      <p>Basic Monthly</p>
                      <h2>
                        $99.99<span>/user</span>
                      </h2>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>
                          <i className="flaticon-check"></i>Get Started with
                          Bold setup
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Flexible Team setup
                        </li>
                        <li>
                          <i className="flaticon-check"></i>10GB Cloud Storage
                        </li>
                      </ul>
                    </div>
                    <Link to="#" className="app-default-btn style3">
                      Choose Plan
                    </Link>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <div className="app-single-pricing-card active">
                    <div className="pricing-top-content">
                      <div className="icon">
                        <i className="flaticon-cube-without-cover-square"></i>
                      </div>
                      <p>Startup Monthly</p>
                      <h2>
                        $224.99<span>/user</span>
                      </h2>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>
                          <i className="flaticon-check"></i>All features in
                          Basic
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Flexible call
                          scheduling
                        </li>
                        <li>
                          <i className="flaticon-check"></i>15GB Cloud Storage
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Integration
                          assistance
                        </li>
                      </ul>
                    </div>
                    <Link to="#" className="app-default-btn style3">
                      Choose Plan
                    </Link>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="800"
                  data-aos-delay="600"
                >
                  <div className="app-single-pricing-card">
                    <div className="pricing-top-content">
                      <div className="icon">
                        <i className="flaticon-copy-1"></i>
                      </div>
                      <p>Enterprise Monthly</p>
                      <h2>
                        $199.99<span>/user</span>
                      </h2>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>
                          <i className="flaticon-check"></i>All features in
                          Startup
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Grow as you go
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Unlimited Cloud
                          Storage
                        </li>
                      </ul>
                    </div>
                    <Link to="#" className="app-default-btn style3">
                      Choose Plan
                    </Link>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="row align-items-center justify-content-center">
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <div className="app-single-pricing-card">
                    <div className="pricing-top-content">
                      <div className="icon">
                        <i className="flaticon-basic-shapes"></i>
                      </div>
                      <p>Basic Yearly</p>
                      <h2>
                        $499.99<span>/user</span>
                      </h2>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>
                          <i className="flaticon-check"></i>Get Started with
                          Bold setup
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Flexible Team setup
                        </li>
                        <li>
                          <i className="flaticon-check"></i>10GB Cloud Storage
                        </li>
                      </ul>
                    </div>
                    <Link to="#" className="app-default-btn style3">
                      Choose Plan
                    </Link>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <div className="app-single-pricing-card active">
                    <div className="pricing-top-content">
                      <div className="icon">
                        <i className="flaticon-cube-without-cover-square"></i>
                      </div>
                      <p>Startup Yearly</p>
                      <h2>
                        $1224.99<span>/user</span>
                      </h2>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>
                          <i className="flaticon-check"></i>All features in
                          Basic
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Flexible call
                          scheduling
                        </li>
                        <li>
                          <i className="flaticon-check"></i>15GB Cloud Storage
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Integration
                          assistance
                        </li>
                      </ul>
                    </div>
                    <Link to="#" className="app-default-btn style3">
                      Choose Plan
                    </Link>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="800"
                  data-aos-delay="600"
                >
                  <div className="app-single-pricing-card">
                    <div className="pricing-top-content">
                      <div className="icon">
                        <i className="flaticon-copy-1"></i>
                      </div>
                      <p>Enterprise Yearly</p>
                      <h2>
                        $599.99<span>/user</span>
                      </h2>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>
                          <i className="flaticon-check"></i>All features in
                          Startup
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Grow as you go
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Unlimited Cloud
                          Storage
                        </li>
                      </ul>
                    </div>
                    <Link to="#" className="app-default-btn style3">
                      Choose Plan
                    </Link>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default Pricing

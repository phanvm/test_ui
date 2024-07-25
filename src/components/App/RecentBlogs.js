import * as React from "react"
import { Link } from "gatsby"

import blogPost1 from "../../images/blog/blog-3.jpg"
import blogPost2 from "../../images/blog/blog-4.jpg"
import blogPost3 from "../../images/blog/blog-5.jpg"

const RecentBlogs = () => {
  return (
    <>
      <div id="blog" className="app-blog-area pt-100 pb-70">
        <div className="container">
          <div className="app-section-title">
            <span>Recent Blogs</span>
            <h2>Our Tips And Latest News</h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300" 
              data-aos-once="true"
            >
              <div className="app-single-blog-card">
                <div className="blog-img">
                  <Link to="/blog-details">
                    <img src={blogPost1} alt="Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="date-and-comment">
                    <ul>
                      <li>
                        <i className="flaticon-calendar"></i>May 22, 2022
                      </li>
                      <li>
                        <i className="flaticon-comment-1"></i>2 Comment
                      </li>
                    </ul>
                  </div>
                  <h3>
                    <Link to="/blog-details">
                      Build A Full Web Chat App From Our Scratch
                    </Link>
                  </h3>
                  <Link
                    to="/blog-details"
                    className="app-default-btn style3"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600" 
              data-aos-once="true"
            >
              <div className="app-single-blog-card">
                <div className="blog-img">
                  <Link to="/blog-details">
                    <img src={blogPost2} alt="Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="date-and-comment">
                    <ul>
                      <li>
                        <i className="flaticon-calendar"></i>May 22, 2022
                      </li>
                      <li>
                        <i className="flaticon-comment-1"></i>2 Comment
                      </li>
                    </ul>
                  </div>
                  <h3>
                    <Link to="/blog-details">
                      Brush Strokes Energize Trees In Paintings
                    </Link>
                  </h3>
                  <Link
                    to="/blog-details"
                    className="app-default-btn style3"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="900" 
              data-aos-once="true"
            >
              <div className="app-single-blog-card">
                <div className="blog-img">
                  <Link to="/blog-details">
                    <img src={blogPost3} alt="Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="date-and-comment">
                    <ul>
                      <li>
                        <i className="flaticon-calendar"></i>May 22, 2022
                      </li>
                      <li>
                        <i className="flaticon-comment-1"></i>2 Comment
                      </li>
                    </ul>
                  </div>
                  <h3>
                    <Link to="/blog-details">
                      Insights on How to Improve Your Teaching.
                    </Link>
                  </h3>
                  <Link
                    to="/blog-details"
                    className="app-default-btn style3"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecentBlogs

import React, { useState } from "react"
import FsLightbox from "fslightbox-react"

import videoBGImg from "../../images/video-img/video-img-2.jpg"

const IntroVideo = () => {
  const [toggler, setToggler] = useState(false)
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div 
        id="video" 
        className="watch-video-area ptb-100" 
        style={{ backgroundImage: `url(${videoBGImg})` }}
      >
        <div className="container">
          <div className="app-section-title">
            <span>Play Video</span>
            <h2>Awesome App For Your Modern Lifestyle</h2>
          </div>
          <div className="video-icon">
            <div className="icon">
              <div className="play-btn" onClick={() => setToggler(!toggler)}>
                <i className="flaticon-play-button-arrowhead"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IntroVideo

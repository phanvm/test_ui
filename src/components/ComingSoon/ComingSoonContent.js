import * as React from "react"

import shape1 from "../../images/coming-soon/shape-1.png"
import shape2 from "../../images/coming-soon/shape-2.png"
import shape3 from "../../images/coming-soon/shape-3.png"
import shape4 from "../../images/coming-soon/shape-4.png"
import shape5 from "../../images/coming-soon/shape-5.png"
import shape6 from "../../images/coming-soon/shape-6.png"

import comingImg1 from "../../images/coming-soon/coming-soon-1.png"
import comingImg2 from "../../images/coming-soon/coming-soon-2.png"

const ComingSoonContent = () => {
  const [days, setDays] = React.useState("")
  const [hours, setHours] = React.useState("")
  const [minutes, setMinutes] = React.useState("")
  const [seconds, setSeconds] = React.useState("")

  React.useEffect(() => {
    const interval = setInterval(() => {
      commingSoonTime()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const commingSoonTime = () => {
    let endTime = new Date("January 1, 2025 17:00:00 PDT")
    let endTimeParse = Date.parse(endTime) / 1000
    let now = new Date()
    let nowParse = Date.parse(now) / 1000
    let timeLeft = endTimeParse - nowParse
    let days = Math.floor(timeLeft / 86400)
    let hours = Math.floor((timeLeft - days * 86400) / 3600)
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60)
    let seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    )
    if (hours < "10") {
      hours = "0" + hours
    }
    if (minutes < "10") {
      minutes = "0" + minutes
    }
    if (seconds < "10") {
      seconds = "0" + seconds
    }
    setDays(days)
    setHours(hours)
    setMinutes(minutes)
    setSeconds(seconds)
  }

  return (
    <>
      <div className="coming-soon-area">
        <div className="container">
          <div className="coming-soon-counter">
            <div className="list">
              <ul
                id="timer"
                className="flex-wrap d-flex justify-content-center"
              >
                <li
                  id="days"
                  className="align-items-center flex-column d-flex justify-content-center"
                >
                  {days} <span>Days</span>
                </li>
                <li
                  id="hours"
                  className="align-items-center flex-column d-flex justify-content-center"
                >
                  {hours} <span>Hours</span>
                </li>
                <li
                  id="minutes"
                  className="align-items-center flex-column d-flex justify-content-center"
                >
                  {minutes} <span>Minutes</span>
                </li>
                <li
                  id="seconds"
                  className="align-items-center flex-column d-flex justify-content-center"
                >
                  {seconds} <span>Seconds</span>
                </li>
              </ul>
            </div>

            {/* Shape Images */}
            <img src={shape1} className="shape-1" alt="Image" />
            <img src={shape2} className="shape-2" alt="Image" />
            <img src={shape4} className="shape-3" alt="Image" />
          </div>

          <div className="coming-soon-content ptb-100">
            <div className="top-content">
              <span>Coming Soon</span>
              <h1>We're Launching Our New Website</h1>
            </div>

            <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                className="form-control"
                placeholder="Your Email Address"
                name="EMAIL"
                required
              />
              <button className="subscribe-btn" type="submit">
                Subscribe Now
              </button>
            </form>

            <div className="social-links">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flaticon-facebook-1"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flaticon-twitter-3"></i>
                  </a>
                </li>
                <li>
                  <a href="https://google.com" target="_blank" rel="noreferrer">
                    <i className="flaticon-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/?lang=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="flaticon-linkedin-1"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Shape Images */}
          <img src={comingImg1} className="coming-soon-shape-1" alt="Image" />
          <img src={comingImg2} className="coming-soon-shape-2" alt="Image" />
          <img src={shape3} className="coming-soon-shape-3" alt="Image" />
          <img src={shape5} className="coming-soon-shape-4" alt="Image" />
          <img src={shape6} className="coming-soon-shape-5" alt="Image" />
        </div>
      </div>
    </>
  )
}

export default ComingSoonContent

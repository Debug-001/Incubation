import React from 'react'
import Image from '/event1.png'
import Image2 from '/event2.png'
import Image3 from '/bootcamp.png'
import bulb from '/bulb.gif'

const Events = () => {
  return (
    <>
      {/* navbar section starts here */}
      <div>
        <nav
          className="navbar navbar-light navbar-expand-md fixed-top navbar-shrink py-3"
          id="mainNav"
        >
          <div className="container">
            <img
              id="logo"
              src="img/logo.png"
              style={{ width: "90px" }}
            />
            <a className="navbar-brand d-flex align-items-center" href="/">
              <span>Incubation Center</span>
            </a>
            <button
              data-bs-toggle="collapse"
              className="navbar-toggler"
              data-bs-target="#navcol-1"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/events">
                    Events
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/startups">
                    Startups
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/team">
                    Teams&nbsp;
                  </a>
                </li>
                <li className="nav-item" />
              </ul>
              <a
                id="btn"
                className="btn btn-primary shadow"
                role="button"
                href="/contact"
                style={{ borderRadius: "15px" }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </nav>

        {/* Events section starts here */}
        <section>
          <div class="container-fluid about-style">
            <div class="row">
              <div class="col-md-10 col-12 mx-auto">
                <h1 id='h1text' class="text-left main-heading">Live /
                &nbsp;
                  <span id='underline' className="underline">Upcoming</span>&nbsp;
                  Events
                  <div class="loader"></div>
                </h1>
                <div class="row">
                  <div class="col-md-6 col-12 hero-text ">
                    <figure>
                      <img src={Image} className="top-image" style={{ "width": "65%", "margin-left": "6rem", "margin-top": "10rem" }} alt="herosection_image" />
                    </figure>
                  </div>
                  <div id="mtext" class="col-md-6 col-12 hero-text d-flex justify-content-center align-items-start flex-column">
                    <h1 style={{"margin-top":"3rem"}} className='display-4 fw-bold pb-4'>SYNERGY
                      <div class="loading">
                        <svg width="64px" height="48px">
                          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
                          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
                        </svg>
                      </div>
                    </h1>
                    <p className="fs-5 text-muted mb-5">We at CIIC [Christ Incubation and Innovation Centre in collaboration with the Entrepreneurial Club of CUSBMA and Reckons Aisle, the Commerce Association bring to you a massive opportunity to meet the most passionate, supremely admired, deeply dedicated Entrepreneurs of India, at our Mega Event- Entrepreneurial Conclave“Synergy”on 27 th February 2023 from 11:00 a.m. onwards in the auditorium.
                    </p>
                    <button class="btn btn-style btn-primary" onClick={(e) => { e.preventDefault(); window.location.href = 'https://www.linkedin.com/posts/christ-innovation-and-incubation-center_team-management-event-activity-7038095172341014528-RknV/?utm_source=share&utm_medium=member_desktop'; }}>Read more</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 col-12 hero-text mb-3 ">
                    <figure>
                      <img src={Image2} className="top-image" style={{ "width": "65%", "margin-left": "6rem", "margin-top": "10rem" }} alt="herosection_image" />
                    </figure>
                  </div>
                  <div id="mtext" class="col-md-6 col-12 hero-text d-flex justify-content-center align-items-start flex-column">
                    <h1 style={{"margin-top":"3rem"}} className='display-4 fw-bold pb-4'>Ideathon for Society 2.0
                    <img style={{"margin-left":"10px", "margin-bottom":"6px"}} id="bulb" classname="bulb" src={bulb} alt="bulb" />
                    
                    </h1>
                    <p className="fs-5 text-muted mb-5">
                    Christ Innovation and Incubation Centre (CIIC) is organizing an event called 'Ideathon for Society 5.0' on Saturday, 17th September 2022. Some stalls will also be set up on the new basketball court, which will be an opportunity for all the small business owners and budding entrepreneurs to promote their business, be it food, product sales, or services. Since the number of stalls will be limited, they will be allotted on a first come first serve basis.
                    </p>
                    <button class="btn btn-style btn-primary " onClick={(e) => { e.preventDefault(); window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdJmKi2SWWRbUDn1SZo_iD-turNw4c73TF3EQsRQ5oEyTdSVw/viewform'; }}>Read more</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 col-12 hero-text">
                    <figure>
                      <img src={Image3} className="top-image" style={{ "width": "65%", "margin-left": "6rem", "margin-top": "10rem" }} alt="herosection_image" />
                    </figure>
                  </div>
                  <div id="mtext" class="col-md-6 col-12 hero-text d-flex justify-content-center align-items-start flex-column">
                    <h1 style={{"margin-top":"3rem"}} className='display-4 fw-bold pb-4'>BOOTCAMP
                    </h1>
                    <p className="fs-5 text-muted">
                    The Christ Innovation and Incubation Centre (CIIC) organised a five day - long boot camp on “Developing Business Plan Report and Pitch desk”. The event when out smoothly with the inauguration of CIIC Space, then speaker sharing their knowledge to the student present in the event and following up with a healthy interaction and yet a motivating and innovative sessions for 5 days. At the end of the event everyone was satisfied and amazed with the knowledge that they gained from these sessions. Various students wanted to continue with their business idea and looking forward to get pre-incubated and some getting incubated. “It was a long yet satisfactory event” quoted one of the students.
                    </p>
                    <button class="btn btn-style btn-primary " onClick={(e) => { e.preventDefault(); window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdJmKi2SWWRbUDn1SZo_iD-turNw4c73TF3EQsRQ5oEyTdSVw/viewform'; }}>Read more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* contact and footer section starts here */}
        <section className="py-4 py-xl-5 mt-5">
          <div className="container">
            <div className="text-white bg-primary border rounded border-0 border-primary d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5">
              <div className="pb-2 pb-lg-1">
                <h2 className="fw-bold text-warning mb-2">
                  Need some assistance ?
                </h2>
                <p className="mb-0">
                  Feel free to contact us with your questions, we are here to
                  help.
                </p>
              </div>
              <div className="my-2">
                <a
                  className="btn btn-light fs-5 py-2 px-4"
                  role="button"
                  href="/contact"
                  style={{ borderRadius: "15px" }}
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container py-4 py-lg-5">
            <div className="row row-cols-2 row-cols-md-4">
              {/* Start: Social Icons */}
              <div className="col-12 col-md-3">
                <div className="fw-bold d-flex align-items-center mb-2">
                  <span>CIIC Vision</span>
                </div>
                <p className="text-muted">
                  Sem eleifend donec molestie, integer quisque orci aliquam.
                </p>
              </div>
              {/* End: Social Icons */}
              {/* Start: About */}
              <div className="col-sm-4 col-md-3 text-lg-start d-flex flex-column">
                <h3 className="fs-6 fw-bold">About Us</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Job openings</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 text-lg-start d-flex flex-column">
                <h3 className="fs-6 fw-bold">About Us</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Legacy</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 text-lg-start d-flex flex-column">
                <h3 className="fs-6 fw-bold">Career</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Benefits</a>
                  </li>
                  <li>
                    <a href="#">Co-ordinators</a>
                  </li>
                  <li>
                    <a href="#">Job openings</a>
                  </li>
                </ul>
              </div>
              {/* End: About */}
            </div>
            <hr />
            <div className="text-muted d-flex justify-content-between align-items-center pt-3">
              <p className="mb-0 mx-auto" >
                Copyright © CIIC CHRIST University, NCR 2023
                <p className="text-center nav-link fw-bold">Website built by
                  <a href="https://webversed.netlify.app">


                    &nbsp;
                    Webversed
                  </a>
                </p>
              </p>
              <ul className="list-inline mb-0 p-4">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/ncr.christuniversity/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-facebook"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                    </svg>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/christ_ncr?lang=en">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-twitter"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                    </svg>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/christ_university_ncr/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-instagram"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Events

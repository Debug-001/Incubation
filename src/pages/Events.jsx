import React from 'react'
import Image from '/event1.png'
import Image2 from '/event2.png'
import Image3 from '/bootcamp.png'
import bulb from '/bulb.gif'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Events = () => {
  return (
    <>
      {/* navbar section starts here */}
      <div>
       <Navbar/>
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
                    <button class="btn btn-style btn-primary" onClick={(xz) => { e.preventDefault(); window.location.href = 'https://www.linkedin.com/posts/christ-innovation-and-incubation-center_team-management-event-activity-7038095172341014528-RknV/?utm_source=share&utm_medium=member_desktop'; }}>Read more</button>
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
        <Footer/>
      </div>
    </>
  )
}

export default Events

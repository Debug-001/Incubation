import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const Team = () => {
  return (
    <>
   <Navbar/>
      <header className="pt-5">
        {/* Start: Hero Clean Reverse */}
        <div id='teams'
          className="container pt-xl-5 ">
          <h3 id='h3' className='display-5 text-center fw-bold  mt-5'>Meet our Dynamic
            <div id="loader" class="loader"></div> and
            <span className='underline'> Talented </span>
            Teams</h3>
          <div className="row pt-5 " >
            <div className="col-md-8 text-center text-md-start mx-auto">
              <div className="text-center">
                <h1 className="display-6 fw-bold pt-5 mb-5">
                  CIIC  &nbsp;
                  <span className="underline">FACULTY</span> CO-ORDINATORS&nbsp;
                </h1>
                <p className="fs-5 text-muted mb-5">
                  Driven by highly experienced faculty members
                </p>
              </div>
            </div>
          </div>
          <div className="main">
            <div className="profile-card">
              <div className="img">
                <img src="/img/garima.jpg" />
              </div>
              <div className="caption">
                <h3>Dr. Garima Anand</h3>
                <p>School of Sciences(OverAll Co-Ordinator)</p>
              </div>
            </div>
            <div className="profile-card">
              <div className="img">
                <img src="/img/yashmita.jpg" />
              </div>
              <div className="caption">
                <h3>Dr. Yashmita Awasthi</h3>
                <p>School of Buisiness and Management
                </p>
              </div>
            </div>
            <div className="profile-card">
              <div className="img">
                <img src="/img/vijay.jpg" />
              </div>
              <div className="caption">
                <h3>Dr. Vijayalaxmi Rajendran</h3>
                <p>School of Commerce,Finance & Accounts</p>
              </div>
            </div>
            <div className="profile-card">
              <div className="img">
                <img src="/img/bhupendra.jpg" />
              </div>
              <div className="caption">
                <h3>Dr. Bhupendra Bhandari</h3>
                <p>School of Humanities & Social Sciences</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container pt-xl-5">
          <div className="row pt-5 " >
            <div className="col-md-8 text-center text-md-start mx-auto">
              <div className="text-center">
                <h1 className="display-6 fw-bold pt-5 mb-5">
                  CIIC&nbsp;
                  <span className="underline">STUDENT</span>&nbsp;CO-ORDINATORS
                </h1>
                <p className="fs-5 text-muted mb-5">
                  Students that actively oversee the entire Facility.
                </p>
              </div>
            </div>
          </div>
          <div className="main">
            <div className="profile-card">
              <div className="img">
                <img src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png" />
              </div>
              <div className="caption">
                <h3>Milan Tom Joby</h3>
                <p>6BCA</p>
                <div className="social-links">
                  <a href="#"><BsGithub /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><BsLinkedin /></a>
                </div>
              </div>
            </div>
            <div className="profile-card">
              <div className="img">
                <img src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png" />
              </div>
              <div className="caption">
                <h3>Prajwal Aggarwal</h3>
                <p>6BBA</p>
                <div className="social-links">
                  <a href="#"><BsGithub /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><BsLinkedin /></a>
                </div>
              </div>
            </div>
            <div className="profile-card">
              <div className="img">
                <img src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png" />
              </div>
              <div className="caption">
                <h3>Vidyosha Jain</h3>
                <p>6BECOH</p>
                <div className="social-links">
                  <a href="#"><BsGithub /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><BsLinkedin /></a>
                </div>
              </div>
            </div>
            <div className="profile-card">
              <div className="img">
                <img src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png" />
              </div>
              <div className="caption">
                <h3>Vinayak Rekhan 
                </h3>
                <p>6BCOMH</p>
                <div className="social-links">
                  <a href="#"><BsGithub /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><BsLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container pt-xl-5">
          <div className="row pt-5 " >
            <div className="col-md-8 text-center text-md-start mx-auto">
              <div className="text-center">
                <h1 className="display-6 fw-bold pt-5 mb-5">
                  CIIC&nbsp;
                  <span className="underline">EXPERT POOL</span> Members&nbsp;
                </h1>
                <p className="fs-5 text-muted mb-5">
                  Group of advanced skilled Tech Enthusiasts.
                </p>
              </div>
            </div>
          </div>
          <div className="main">
            <div className="profile-card">
              <div className="img">
                <img src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png" />
              </div>
              <div className="caption">
                <h3>Ayush Tiwari</h3>
                <p>5FINTECH</p>
                <div className="social-links">
                  <a href="#"><BsGithub /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><BsLinkedin /></a>
                </div>
              </div>
            </div>
            <div className="profile-card">
              <div className="img">
                <img src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png" />
              </div>
              <div className="caption">
                <h3>Om Sharma</h3>
                <p>5BCA</p>
                <div className="social-links">
                  <a href="#"><BsGithub /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><BsLinkedin /></a>
                </div>
              </div>
            </div>
            <div className="profile-card">
              <div className="img">
                <img src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png" />
              </div>
              <div className="caption">
                <h3>Samyak Jain</h3>
                <p>5BCA</p>
                <div className="social-links">
                  <a href="#"><BsGithub /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><BsLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className='mt-5'>
        {/* Start: Features Centered Icons */}
        <div className="container py-4 py-xl-5">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6">
              <h3 className="display-6 fw-bold ">Teams that make your work more&nbsp;<span className="underline">Productive</span></h3>
            </div>
            <div className="col-md-8 col-xl-6 pt-4">
              <p className="text-muted">Synergy in Action: Our Effective Teamwork Drives Innovation and Growth</p>
            </div>
          </div>
          <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div className="col">
              <div className="card border-light border-1 d-flex justify-content-center p-4">
                <div className="card-body">
                  <div>
                    <div className="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-images">
                      <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                      <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                    </svg></div>
                    <h4 className="fw-bold">Designing Team</h4>
                    <p className="text-muted">Designing the Future: Navigating the Evolving Landscape of Design Teams</p><a className="fw-bold link-primary" href="#"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-light border-1 d-flex justify-content-center p-4">
                <div className="card-body">
                  <div>
                    <div className="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-window-stack">
                      <path fillRule="evenodd" d="M12 1a2 2 0 0 1 2 2 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10ZM2 12V5a2 2 0 0 1 2-2h9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Zm1-4v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H3Zm12-1H3V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2ZM4.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM6 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                    </svg></div>
                    <h4 className="fw-bold">Documentation Team</h4>
                    <p className="text-muted">Documenting for Success: Building Effective Documentation Teams</p><a className="fw-bold link-primary" href="#"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-between flex-xl-column">
              <div className="card border-light border-1 d-flex flex-grow-1 justify-content-center p-2 me-3 me-xl-0 mb-xl-4">
                <div className="card-body">
                  <div className="bs-icon-md bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-people-fill">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                  </svg></div>
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="fw-bold mb-0">Hospitality</h4><a className="fw-bold link-primary" href="#">

                    </a>
                  </div>
                </div>
              </div>
              <div className="card border-light border-1 d-flex flex-grow-1 justify-content-center p-2">
                <div className="card-body">
                  <div className="bs-icon-md bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-person-lines-fill">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                  </svg></div>
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="fw-bold mb-0">Emcee</h4><a className="fw-bold link-primary" href="#"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{/* End: Features Centered Icons */}
      </section>

      <section className="py-5">
        {/* Start: Features Cards */}
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-5"><img className="rounded img-fluid" src="img/illustrations/startup.svg" /></div>
            <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
              <div className="row gy-4 row-cols-1 row-cols-md-2 flex-grow-1">
                <div className="col">
                  <div className="card border-light border-1 d-flex justify-content-center p-4">
                    <div className="card-body">
                      <div>
                        <h4 className="fw-bold">Tech Team</h4>
                        <p className="text-muted d-none d-xl-block">Collaborating for Excellence: Building Effective Technical Teams through Communication and Collaboration</p><a className="fw-bold link-primary" href="">&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-arrow-narrow-right fs-3">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <line x1={15} y1={16} x2={19} y2={12} />
                          <line x1={15} y1={8} x2={19} y2={12} />
                        </svg></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-light border-1 d-flex justify-content-center p-4">
                    <div className="card-body">
                      <div>
                        <h4 className="fw-bold">Expert Pool</h4>
                        <p className="text-muted d-none d-xl-block">Expertise with Impact: Diversity and Inclusion Drive Quality and Innovation in Expert team.</p><a className="fw-bold link-primary" href="/expert">&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-arrow-narrow-right fs-3">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <line x1={15} y1={16} x2={19} y2={12} />
                          <line x1={15} y1={8} x2={19} y2={12} />
                        </svg></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
              <div className="row gy-4 row-cols-1 row-cols-md-2 flex-grow-1">
                <div className="col">
                  <div className="card border-light border-1 d-flex justify-content-center p-4">
                    <div className="card-body">
                      <div>
                        <h4 className="fw-bold">Social Media Team</h4>
                        <p className="text-muted d-none d-xl-block">Social Media in the Future: Navigating the Challenges of Emerging Trends and Technologies</p><a className="fw-bold link-primary" href="#"></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-light border-1 d-flex justify-content-center p-4">
                    <div className="card-body">
                      <div>
                        <h4 className="fw-bold">Sponsorship Team</h4>
                        <p className="text-muted d-none d-xl-block">Unleashing the Power of Marketing: Our Strong Teams Drive Organizational Growth</p><a className="fw-bold link-primary" href="#"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 order-first order-md-last mb-5"><img className="rounded img-fluid" src="img/illustrations/report.svg" /></div>
          </div>
        </div>{/* End: Features Cards */}
        {/* Start: Features Cards */}
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-5"><img className="rounded img-fluid" src="img/illustrations/teamwork.svg" /></div>
            <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
              <div className="row gy-4 row-cols-1 row-cols-md-2 flex-grow-1">
                <div className="col">
                  <div className="card border-light border-1 d-flex justify-content-center p-4">
                    <div className="card-body">
                      <div>
                        <h4 className="fw-bold">Registration Team&nbsp;</h4>
                        <p className="text-muted d-none d-xl-block">Project Management with Impact:&nbsp; Diversity and Inclusion Drive Quality and Innovation in Project Management Teams.</p><a className="fw-bold link-primary" href="#">&nbsp;</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-light border-1 d-flex justify-content-center p-4">
                    <div className="card-body">
                      <div>
                        <h4 className="fw-bold">PR Team</h4>
                        <p className="text-muted d-none d-xl-block">PR Teams that Build Brands: Strategies for Building High-Performing Teams</p><a className="fw-bold link-primary" href="#"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{/* End: Features Cards */}
      </section>
    <Footer/>
    </>

  )
}

export default Team

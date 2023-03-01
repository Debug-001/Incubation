import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'


const Team = () => {
  return (
    <>
      {/* Start: Navbar Centered Links */}
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
                <img src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png" />
              </div>
              <div className="caption">
                <h3>Dr. Garima Anand</h3>
                <p>School of Sciences</p>
              </div>
            </div>
            <div className="profile-card">
              <div className="img">
                <img src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png" />
              </div>
              <div className="caption">
                <h3>Dr. Vaibhav Tripathi</h3>
                <p>School of Business & Management</p>
              </div>
            </div>
            <div className="profile-card">
              <div className="img">
                <img src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png" />
              </div>
              <div className="caption">
                <h3>Jitendar Bhandari</h3>
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
              </div>
            </div>
          </div>
          <div className="main">
            <div className="profile-card">
              <div className="img">
                <img src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png" />
              </div>
              <div className="caption">
                <h3>Allan Mathew</h3>
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
                <h3>Akarsh Jain</h3>
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
                <h3>Stuti Datta</h3>
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
                <h3>Ujjwal Kumar</h3>
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
                <h1 className="display-6 fw-bold pt-5 mb-5 py-5">
                  CIIC&nbsp;
                  <span className="underline">TECH TEAM</span> Members&nbsp;
                </h1>
              </div>
            </div>
          </div>
          <div className="main">
            <div className="profile-card">
              <div className="img">
                <img src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png" />
              </div>
              <div className="caption">
                <h3>Om Sharma</h3>
                <p>Full Stack Developer</p>
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
                <h3>Somnath Paul</h3>
                <p>UX/UI Designer</p>
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
                <p>Web Developer</p>
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
          className="container pt-xl-5 ">
          <div className="row pt-5 " >
            <div className="col-md-8 text-center text-md-start mx-auto">
              <div className="text-center">
                <h4 className="display-6 fw-bold  pt-5 mb-5">
                  CIIC 
                  <span className='underline'> EXPERT POOL  </span>
                  MEMBERS
                </h4>
              </div>
            </div>
          </div>
          <div className="main mt-5">
            <div className="profile-card">
              <div className="img">
                <img src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png" />
              </div>
              <div className="caption">
                <h3>Om Sharma</h3>
                <p>Full Stack Developer</p>
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
                <h3>Somnath Paul</h3>
                <p>UX/UI Designer</p>
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
                <p>Web Developer</p>
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


      {/* End: Hero With Brands */}


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


      {/* Start: Footer Multi Column */}
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
    </>

  )
}

export default Team

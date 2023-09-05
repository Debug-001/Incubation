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
                <img src="/img/raka.jpg" />
              </div>
              <div className="caption">
                <h3>Dr. Rakesh K R</h3>
                <p>School of Humanities & Social Sciences</p>
              </div>
            </div>

            <div className="profile-card">
              <div className="img">
                <img src="/img/aditi.jpg" />
              </div>
              <div className="caption">
                <h3>"Dr Aditi Mukherjee	"</h3>
                <p>School of Law</p>
              </div>
            </div>

            <div className="profile-card">
              <div className="img">
                <img src="/img/laksh.jpg" />
              </div>
              <div className="caption">
                <h3>"Lakshay Sharma"</h3>
                <p>Deparment of Economics</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container pt-xl-5" id='profile-con'>
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
                <img src="/img/rushil.jpg" />
              </div>
              <div className="caption">
                <h3>Rushil Mehra</h3>
                <p>Student Co-ordinator SBM</p>
              </div>
            </div>
            <div className="profile-card">
              <div className="img">
                <img src="/img/praj.jpg" />
              </div>
              <div className="caption">
                <h3>Prajwal Aggarwal</h3>
                <p>School of Law</p>
                {/* <div className="social-links">
                  <a href="#"><BsGithub /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><BsLinkedin /></a>
                </div> */}
              </div>
            </div>
            <div className="profile-card">
              <div className="img">
                <img src="/img/vid.jpg" />
              </div>
              <div className="caption">
                <h3>Vidyosha Jain</h3>
                <p>School of Humanities and Social Sciences</p>
                {/* <div className="social-links">
                  <a href="#"><BsGithub /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><BsLinkedin /></a>
                </div> */}
              </div>
            </div>
            <div className="profile-card">
              <div className="img">
                <img src="/img/vin.jpg" />
              </div>
              <div className="caption">
                <h3>Vinayak Rekhan 
                </h3>
                <p>School of Sciences</p>
                {/* <div className="social-links">
                  <a href="#"><BsGithub /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><BsLinkedin /></a>
                </div> */}
              </div>
            </div>
            <div className="profile-card">
              <div className="img">
                <img src="/img/milan.png" />
              </div>
              <div className="caption">
                <h3>Milan Tom Joby
                </h3>
                <p>School of Sciences</p>
                {/* <div className="social-links">
                  <a href="#"><BsGithub /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><BsLinkedin /></a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    <Footer/>
    </>

  )
}

export default Team

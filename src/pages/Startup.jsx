import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Startup = () => {
  return (
    <>
	<Navbar/>
	 <section className="py-5">
      {/* Start: Pricing Clean */}
      <div className="container py-4 py-xl-5">
        <div className="row mb-5" style={{"margin": '18px'}}>
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 id='h2text' className="display-6 fw-bold mt-5" style={{fontSize: '35.88px', height: '163.1px', margin: '21px', paddingRight: '0px', paddingLeft: '0px', marginRight: '-9px'}}>Launch Your Dreams into<br />Reality: Join our &nbsp;<span className="underline">Incubation Center</span>&nbsp; and Build the Future.</h2>
            <p id="ptext" className="text-muted " style={{color: 'rgb(0,0,0)', fontSize: '22px', fontWeight: 'bold', background: 'var(--bs-white)', marginTop: '5rem'}}>Checkout our Amazing Start-ups</p>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5">
          <div className="col">
            <div className="card border-0 h-100">
              <div className="card-body d-flex flex-column justify-content-between p-4">
                <div>
                  <h6 className="fw-bold text-muted" style={{fontSize: '20px'}}><img src="img/2%20copy.png" style={{width: '50px'}} />Ambimed</h6>
                  <h4 className="display-5 fw-bold mb-4" style={{fontSize: '30.632px', marginTop: '26px'}}>A Healthcarre service portal</h4>
                  <ul className="list-unstyled">
                    <li className="d-flex mb-2"><span>Get peace of mind during emergencies with Ambimed, the real-time ambulance tracking website and app. Stay updated on your ambulance's location for a faster medical&nbsp;response.<br /><br /></span></li>
                    <li className="d-flex mb-2" />
                  </ul>
                </div><a className="btn btn-primary" role="button" href="https://ambimed.netlify.app/" style={{borderRadius: '15px'}}>Ambimed&nbsp;</a>
              </div>
            </div><span className="badge bg-warning position-absolute top-0 end-0 rounded-bottom-left text-uppercase text-primary">Most Popular</span><span className="badge bg-warning position-absolute top-0 end-0 rounded-bottom-left text-uppercase text-primary">Most Popular</span><span className="badge bg-warning position-absolute top-0 end-0 rounded-bottom-left text-uppercase text-primary">Most Popular</span><span className="badge bg-warning position-absolute top-0 end-0 rounded-bottom-left text-uppercase text-primary">Most Popular</span><span className="badge bg-warning position-absolute top-0 end-0 rounded-bottom-left text-uppercase text-primary">Most Popular</span>
          </div>
          <div className="col">
            <div className="card border-warning border-2 h-100">
              <div className="card-body d-flex flex-column justify-content-between p-4">
                <div>
                  <h6 className="fw-bold text-muted" />
                  <h6 className="fw-bold text-muted" style={{fontSize: '20px'}}><img src="img/2.png" style={{width: '50px'}} />Eko-mart</h6>
                  <h4 className="display-5 fw-bold mb-4" style={{fontSize: '28.632px', marginTop: '28px'}}>An Eco-friendly Ecommerce shop</h4>
                  <ul className="list-unstyled">
                    <li className="d-flex mb-2"><span><span style={{color: 'rgb(43, 42, 42)'}}>We are friendly e-commerce for eco-friendly products. Eko-mart is a platform that provides people to choose eco-friendly products for their daily needs.</span><br /><br /></span></li>
                    <li className="d-flex mb-2"><span className="bs-icon-xs bs-icon-rounded bs-icon me-2" /></li>
                    <li className="d-flex mb-2" />
                  </ul>
                </div><a className="btn btn-warning" role="button" href="https://ekomart.co/" style={{borderRadius: '15px'}}>Eko-mart</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 h-100">
              <div className="card-body d-flex flex-column justify-content-between p-4">
                <div className="pb-4">
                  <h6 className="fw-bold text-muted" />
                  <h6 className="fw-bold text-muted" style={{fontSize: '20px'}}><img src="/webversed.png" style={{width: '60px'}} />Webversed</h6>
                  <h4 className="display-5 fw-bold mb-4" style={{fontSize: '28.632px', marginTop: '28px'}}>E-services for your business</h4>
                  <h4 className="display-5 fw-bold mb-4" />
                  <ul className="list-unstyled">
                    <li className="d-flex mb-2"><span>Webversed aims to provide various E-services for exponential growth of your business at  extremely affordable prices.&nbsp;</span></li>
                    <li className="d-flex mb-2" />
                    <li className="d-flex mb-2" />
                  </ul>
                </div><a className="btn btn-primary" role="button" href="https://webversed.netlify.app/" style={{borderRadius: '15px'}}>Webvesed</a>
              </div>
            </div>
          </div>
        </div>
      </div>{/* End: Pricing Clean */}
    </section>{/* Start: Footer Multi Column */}
  <Footer/>
  </>
  
  )
}

export default Startup

import React from 'react'

const Navbar = () => {
  return (
    <>
<nav
					className="navbar navbar-light navbar-expand-md fixed-top navbar-shrink py-3"
					id="mainNav"
				>
					<div className="container" id="navcon">
						<img
							id="logo"
							src="img/logo.png"
							style={{ width: "90px" }}
						/>
						<a className="navbar-brand d-flex align-items-center" href="/">
							<span>Christ Innovation & Incubation Center</span>
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

								<li className="nav-item">
									<a className="nav-link" href="https://forms.gle/AEg69e256qeuBDwp8">
										Apply for Incubitee Program&nbsp;
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
    </>
  )
}

export default Navbar
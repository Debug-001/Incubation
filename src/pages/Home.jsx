import React from "react";

function Home() {
	return (
		<>
			<div>
				{/* Start: Navbar*/}
				<nav
					className="navbar navbar-light navbar-expand-md fixed-top navbar-shrink py-3"
					id="mainNav"
				>
					<div className="container">
						<img
							id="logo"
							src="img/1672134599113.jpg"
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
									<a className="nav-link" href="/teams">
										Teams&nbsp;
									</a>
								</li>
								<li className="nav-item" />
							</ul>
							<a
								id="btn"
								className="btn btn-primary shadow"
								role="button"
								href="/contacts"
								style={{ borderRadius: "15px" }}
							>
								Contact Us
							</a>
						</div>
					</div>
				</nav>
				{/* End: Navbars */}
				<header className="pt-5">
					{/* Start: Hero Clean Reverse */}

					<div className="container pt-4 pt-xl-5">
						<div className="row pt-5">
							<div className="col-md-8 text-center text-md-start mx-auto">
								<div className="text-center">
									<h1 className="display-4 fw-bold pt-5 mb-5">
										Working on making a better future&nbsp;
										<span className="underline">together</span>.
									</h1>
									<p className="fs-5 text-muted mb-5">
										CHRIST UNIVERSITY INCUBATION AND INNOVATION CELL
									</p>
									<form
										className="d-flex justify-content-center flex-wrap"
										method="post"
									>
										<div className="shadow-lg mb-3">
											<input
												className="form-control"
												type="email"
												name="email"
												placeholder="Subscribe to our newletter"
												style={{ borderRadius: 0, width: "338px" }}
											/>
										</div>
										<div className="shadow-lg mb-3">
											<button
												className="btn btn-primary"
												type="submit"
												style={{ borderRadius: 0 }}
											>
												Subscribe{" "}
											</button>
										</div>
									</form>
								</div>
							</div>
							<div className="col-12 col-lg-10 mx-auto">
								<div className="text-center position-relative">
									<img
										className="img-fluid"
										src="img/illustrations/img2.jpg"
										style={{
											width: "800px",
											borderStyle: "ridge",
											borderColor: "rgb(0,0,0)",
										}}
									/>
								</div>
							</div>
						</div>
					</div>
					{/* End: Hero Clean Reverse */}
				</header>

				<section>
					{/* Start: Features Centered Icons */}
					<div className="container py-4 py-xl-5">
						<div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
							<div className="col-xl-5">
								<div className="card border-light border-1 d-flex justify-content-center p-4">
									<div className="card-body">
										<div className="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="1em"
												height="1em"
												fill="currentColor"
												viewBox="0 0 16 16"
												className="bi bi-eye-fill"
											>
												<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
												<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
											</svg>
										</div>
										<div>
											<h4 className="fw-bold">Vision</h4>
											<p className="text-muted">
												<span style={{ color: "rgb(123, 120, 120)" }}>
													To create, foster and engender sustainable start-ups
													ecosystem that nurture creativity, innovation&nbsp;and
													socially conscious entrepreneurs.
												</span>
											</p>
											<button className="btn btn-sm px-0" type="button">
												Learn More&nbsp;
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="1em"
													height="1em"
													fill="currentColor"
													viewBox="0 0 16 16"
													className="bi bi-arrow-right"
												>
													<path
														fillRule="evenodd"
														d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
													></path>
												</svg>
												<br />
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-6">
								<div className="card border-light border-1 d-flex justify-content-center p-4">
									<div className="card-body">
										<div className="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="1em"
												height="1em"
												viewBox="0 0 24 24"
												strokeWidth={2}
												stroke="currentColor"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="icon icon-tabler icon-tabler-school"
											>
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
												<path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
											</svg>
										</div>
										<div>
											<h4 className="fw-bold">Mission&nbsp; &nbsp;</h4>
											<p className="text-muted">
												<span style={{ color: "rgb(123, 120, 120)" }}>
													Our devout is towards progression of entrepreneurial
													culture within the University amidst students, alumni
													faculty and aspirants in nearby areas for social
													development and economic growth of the communities.
												</span>
											</p>
											<button className="btn btn-sm px-0" type="button">
												Learn More&nbsp;
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="1em"
													height="1em"
													fill="currentColor"
													viewBox="0 0 16 16"
													className="bi bi-arrow-right"
												>
													<path
														fillRule="evenodd"
														d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
													></path>
												</svg>
												<br />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card border-light border-1 d-flex justify-content-center p-4">
								<div className="card-body">
									<div className="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											fill="none"
										>
											<path
												d="M14.1254 13H10.1254V15H14.1254V13Z"
												fill="currentColor"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M8.12537 13C9.22994 13 10.1254 12.1046 10.1254 11C10.1254 9.89543 9.22994 9 8.12537 9C7.0208 9 6.12537 9.89543 6.12537 11C6.12537 12.1046 7.0208 13 8.12537 13ZM8.12537 11.5C8.40151 11.5 8.62537 11.2761 8.62537 11C8.62537 10.7239 8.40151 10.5 8.12537 10.5C7.84922 10.5 7.62537 10.7239 7.62537 11C7.62537 11.2761 7.84922 11.5 8.12537 11.5Z"
												fill="currentColor"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M18.1254 11C18.1254 12.1046 17.2299 13 16.1254 13C15.0208 13 14.1254 12.1046 14.1254 11C14.1254 9.89543 15.0208 9 16.1254 9C17.2299 9 18.1254 9.89543 18.1254 11ZM16.6254 11C16.6254 11.2761 16.4015 11.5 16.1254 11.5C15.8492 11.5 15.6254 11.2761 15.6254 11C15.6254 10.7239 15.8492 10.5 16.1254 10.5C16.4015 10.5 16.6254 10.7239 16.6254 11Z"
												fill="currentColor"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M2.74884 14.6663C3.73056 16.6421 5.76939 18 8.12537 18H16.1254C18.5654 18 20.6652 16.5435 21.6029 14.4525C22.3722 13.9093 22.8746 13.0133 22.8746 12C22.8746 10.9867 22.3722 10.0907 21.6029 9.54753C20.6652 7.45651 18.5654 6 16.1254 6H8.12537C5.76939 6 3.73056 7.3579 2.74884 9.33375C1.78448 9.83263 1.12537 10.8393 1.12537 12C1.12537 13.1607 1.78448 14.1674 2.74884 14.6663ZM8.12537 8H16.1254C17.5088 8 18.7282 8.70234 19.4465 9.76991C19.7227 10.4593 19.8746 11.2119 19.8746 12C19.8746 12.7881 19.7227 13.5407 19.4465 14.2301C18.7282 15.2977 17.5088 16 16.1254 16H8.12537C5.91623 16 4.12537 14.2091 4.12537 12C4.12537 9.79086 5.91623 8 8.12537 8Z"
												fill="currentColor"
											/>
										</svg>
									</div>
									<h4 className="fw-bold mb-4 card-title">Objectives</h4>
									<div>
										<p className="text-muted">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="1em"
												height="1em"
												viewBox="0 0 24 24"
												fill="none"
											>
												<path
													d="M12.0519 14.8285L13.4661 16.2427L17.7087 12L13.4661 7.7574L12.0519 9.17161L13.8803 11H6.34318V13H13.8803L12.0519 14.8285Z"
													fill="currentColor"
												/>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
													fill="currentColor"
												/>
											</svg>
											&nbsp;&nbsp;To organize various innovation and
											entrepreneurship-related activities
										</p>
										<p className="text-muted">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="1em"
												height="1em"
												viewBox="0 0 24 24"
												fill="none"
											>
												<path
													d="M12.0519 14.8285L13.4661 16.2427L17.7087 12L13.4661 7.7574L12.0519 9.17161L13.8803 11H6.34318V13H13.8803L12.0519 14.8285Z"
													fill="currentColor"
												/>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
													fill="currentColor"
												/>
											</svg>
											&nbsp;&nbsp;To offer access to high-quality infrastructure
											and a vibrant community of successful entrepreneurs,
											investors and corporate managers to all users of the
											Centre.
										</p>
									</div>
									<p className="text-muted card-text">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											fill="none"
										>
											<path
												d="M12.0519 14.8285L13.4661 16.2427L17.7087 12L13.4661 7.7574L12.0519 9.17161L13.8803 11H6.34318V13H13.8803L12.0519 14.8285Z"
												fill="currentColor"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
												fill="currentColor"
											/>
										</svg>
										&nbsp;&nbsp;To encourage academic research with the aim of
										better understanding the entrepreneurial environment in
										India and the strategies that are likely to succeed in the
										said environment.
									</p>
									<p className="text-muted card-text">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
											fill="none"
										>
											<path
												d="M12.0519 14.8285L13.4661 16.2427L17.7087 12L13.4661 7.7574L12.0519 9.17161L13.8803 11H6.34318V13H13.8803L12.0519 14.8285Z"
												fill="currentColor"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
												fill="currentColor"
											/>
										</svg>
										&nbsp;&nbsp;To establish a structured mentoring process
										where a team of experienced mentors offer their expertise
										(mentoring/ expert advice) to both current and prospective
										entrepreneurs.
									</p>
									<button className="btn btn-sm px-0 mb-2 mt-2" type="button">
										Core Focused Areas of CIIC, DELHI NCR
									</button>
									<p className="text-muted card-text">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1em"
											height="1em"
											fill="currentColor"
											viewBox="0 0 16 16"
											className="bi bi-app-indicator"
										>
											<path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"></path>
											<path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
										</svg>
										&nbsp;&nbsp;Pure Entrepreneurship
									</p>
									<p className="text-muted card-text">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1em"
											height="1em"
											fill="currentColor"
											viewBox="0 0 16 16"
											className="bi bi-app-indicator"
										>
											<path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"></path>
											<path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
										</svg>
										&nbsp; Women Entrepreneurship
									</p>
									<p className="text-muted card-text">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1em"
											height="1em"
											fill="currentColor"
											viewBox="0 0 16 16"
											className="bi bi-app-indicator"
										>
											<path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"></path>
											<path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
										</svg>
										&nbsp; Social Entrepreneurship
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* End: Features Centered Icons */}
				</section>

				<section>
					{/* Start: Hero Clean Reverse */}
					<div className="container py-4 py-xl-5">
						<div className="row">
							<div className="col-md-6">
								<h3
									className="display-6 fw-bold pb-md-4"
									style={{ fontSize: "34px" }}
								>
									Fostering a culture of collaboration and&nbsp;&nbsp;
									<span className="underline">teamwork</span>
								</h3>
							</div>
							<div className="col-md-6 pt-4">
								<p className="text-muted mb-4">
									At CIIC, we have our amazing teams helping push further
									towards success every second.
								</p>
							</div>
						</div>
						<div className="row gy-4 gy-md-0">
							<div className="col-md-6 d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
								<div>
									<div className="row gy-2 row-cols-1 row-cols-sm-2">
										<div className="col text-center text-md-start">
											<div className="d-flex justify-content-center align-items-center justify-content-md-start">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="1em"
													height="1em"
													viewBox="0 0 24 24"
													strokeWidth={2}
													stroke="currentColor"
													fill="none"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="icon icon-tabler icon-tabler-sun fs-3 text-primary bg-warning"
												>
													<path stroke="none" d="M0 0h24v24H0z" fill="none" />
													<circle cx={12} cy={12} r={4} />
													<path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
												</svg>
												<h5 className="fw-bold mb-0 ms-2">Tech Team</h5>
											</div>
											<p className="text-muted my-3">
												because without a Tech Team, it all remains a dream!
											</p>
										</div>
										<div className="col text-center text-md-start">
											<div className="d-flex justify-content-center align-items-center justify-content-md-start">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="1em"
													height="1em"
													viewBox="0 0 24 24"
													strokeWidth={2}
													stroke="currentColor"
													fill="none"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="icon icon-tabler icon-tabler-sun fs-3 text-primary bg-warning"
												>
													<path stroke="none" d="M0 0h24v24H0z" fill="none" />
													<circle cx={12} cy={12} r={4} />
													<path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
												</svg>
												<h5 className="fw-bold mb-0 ms-2">Social Media Team</h5>
											</div>
											<p className="text-muted my-3">
												A group of amazing volunteers managing our social
												handles.
											</p>
										</div>
										<div className="col text-center text-md-start">
											<div className="d-flex justify-content-center align-items-center justify-content-md-start">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="1em"
													height="1em"
													viewBox="0 0 24 24"
													strokeWidth={2}
													stroke="currentColor"
													fill="none"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="icon icon-tabler icon-tabler-sun fs-3 text-primary bg-warning"
												>
													<path stroke="none" d="M0 0h24v24H0z" fill="none" />
													<circle cx={12} cy={12} r={4} />
													<path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
												</svg>
												<h5 className="fw-bold mb-0 ms-2">Event Organisers</h5>
											</div>
											<p className="text-muted my-3">
												CIIC Co-Ordinator's helping out setup amazing events.
											</p>
										</div>
										<div className="col text-center text-md-start">
											<div className="d-flex justify-content-center align-items-center justify-content-md-start">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="1em"
													height="1em"
													viewBox="0 0 24 24"
													strokeWidth={2}
													stroke="currentColor"
													fill="none"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="icon icon-tabler icon-tabler-sun fs-3 text-primary bg-warning"
												>
													<path stroke="none" d="M0 0h24v24H0z" fill="none" />
													<circle cx={12} cy={12} r={4} />
													<path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
												</svg>
												<h5 className="fw-bold mb-0 ms-2">Content Team</h5>
											</div>
											<p className="text-muted my-3">
												CIIC is filled with its super Creative Content
												Team&nbsp;
											</p>
											<button
												className="btn btn-primary"
												type="button"
												style={{ borderRadius: "16px" }}
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 -64 640 640"
													width="1em"
													height="1em"
													fill="currentColor"
													style={{ width: "19px", marginRight: "4px" }}
												>
													<path d="M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z"></path>
												</svg>
												Teams
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 order-first order-md-last">
								<div>
									<img
										className="rounded img-fluid w-100 fit-cover"
										style={{ minHeight: "300px" }}
										src="img/illustrations/teamwork.svg"
									/>
								</div>
							</div>
						</div>
					</div>
					{/* End: Hero Clean Reverse */}
				</section>

				<section>
					{/* Start: Hero Clean Reverse */}
					<div className="container py-4 py-xl-5">
						<div className="row gy-4 gy-md-0">
							<div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
								<div>
									<img
										className="rounded img-fluid fit-cover"
										style={{ minHeight: "300px" }}
										src="img/illustrations/img3.jpg"
										width={800}
									/>
								</div>
							</div>
							<div className="col">
								<div style={{ maxWidth: "450px", marginLeft: "16px" }}>
									<h3
										className="fw-bold pb-md-4"
										style={{ fontSize: "34.752px" }}
									>
										<span className="underline" style={{ fontWeight: "bold" }}>
											Ideathon
										</span>
										&nbsp;<strong>for Society 5.0</strong>
									</h3>
									<p className="text-muted py-4 py-md-0">
										<span style={{ color: "rgb(0, 0, 0)" }}>
											Christ Innovation and Incubation Centre (CIIC) is
											organizing an event called 'Ideathon for Society 5.0' on
											Saturday, 17th September 2022. Some stalls will also be
											set up on the new basketball court, which will be an
											opportunity for all the small business owners and budding
											entrepreneurs to promote their business, be it food,
											product sales, or services. Since the number of stalls
											will be limited, they will be allotted on a first come
											first serve basis.
										</span>
									</p>
									<div className="row gy-4 row-cols-2 row-cols-md-2">
										<div className="col">
											<div>
												<span className="fs-2 fw-bold text-primary bg-warning">
													500$
												</span>
												<p className="fw-normal text-muted">
													&nbsp;Worth Gifts and rewards
												</p>
												<p className="fw-normal text-muted" />
											</div>
										</div>
										<div className="col">
											<div>
												<span className="fs-2 fw-bold text-primary bg-warning">
													150+
												</span>
												<p className="fw-normal text-muted">Participations</p>
											</div>
										</div>
										<div className="col">
											<div>
												<span className="fs-2 fw-bold text-primary bg-warning">
													1200+
												</span>
												<p className="fw-normal text-muted">
													Campus across reach
												</p>
											</div>
										</div>
										<div className="col">
											<div>
												<span className="fs-2 fw-bold text-primary bg-warning">
													50+
												</span>
												<p className="fw-normal text-muted">
													CIIC Co-ordinators&nbsp;
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* End: Hero Clean Reverse */}
				</section>
				{/* Start: Banner Heading Image */}

				<section className="py-4 py-xl-5">
					{/* Start: 1 Row 2 Columns */}
					<div className="container">
						<div className="bg-primary border rounded border-0 border-primary overflow-hidden">
							<div className="row g-0">
								<div className="col-md-6 d-flex flex-column justify-content-center">
									<div className="text-white p-4 p-md-5">
										<h2 className="fw-bold text-white mb-3">
											Hosting some of the most phenomenal events here at
											CIIC&nbsp;
										</h2>
										<p className="mb-4">
											We at CIIC, make sure to promote individual growth by
											hosting various events upbringing the entrepreneurship
											qualities.
										</p>
										<div className="my-3">
											<a
												className="btn btn-warning me-2 mt-2"
												role="button"
												href="#"
												style={{ borderRadius: "15px" }}
											>
												Events
											</a>
											<a
												className="btn btn-light mt-2"
												role="button"
												href="#"
												style={{ borderRadius: "15px" }}
											>
												Teams
											</a>
										</div>
									</div>
								</div>
								<div
									className="col-md-6 order-first order-md-last"
									style={{ minHeight: "250px" }}
								>
									<img
										className="w-8\0 h-100 fit-contain pt-4 px-3 pt-md-0"
										src="img/illustrations/img1.jpg"
										style={{
											width: "446px",
											borderRadius: "9px",
											borderTopLeftRadius: "5px",
											paddingLeft: "0px",
											marginRight: "16px",
											paddingRight: "0px",
											// git borderRadius: "10px 10px 10px 10px",
										}}
									/>
								</div>
							</div>
						</div>
					</div>
					{/* End: 1 Row 2 Columns */}
				</section>
				{/* End: Banner Heading Image */}
				<section className="py-5">
					{/* Start: Pricing Clean */}
					<div className="container py-4 py-xl-5">
						<div className="row mb-5">
							<div className="col-md-8 col-xl-6 text-center mx-auto">
								<h2
									className="display-6 fw-bold mb-4"
									style={{ fontSize: "35.88px", height: "163.1px" }}
								>
									Launch Your Dreams into
									<br />
									Reality: Join our&nbsp;
									<span className="underline">Incubation Center</span>&nbsp; and
									Build the Future.
								</h2>
								<p
									className="text-muted"
									style={{
										color: "rgb(0,0,0)",
										fontSize: "22px",
										fontWeight: "bold",
										background: "var(--bs-white)",
									}}
								>
									Checkout our Amazing Start-ups
								</p>
							</div>
						</div>
						<div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
							<div className="col">
								<div className="card border-0 h-100">
									<div className="card-body d-flex flex-column justify-content-between p-4">
										<div>
											<h6
												className="fw-bold text-muted"
												style={{ fontSize: "20px" }}
											>
												<img src="img/2%20copy.png" style={{ width: "50px" }} />
												Ambimed
											</h6>
											<h4
												className="display-5 fw-bold mb-4"
												style={{ fontSize: "30.632px", marginTop: "26px" }}
											>
												A Healthcarre service portal
											</h4>
											<ul className="list-unstyled">
												<li className="d-flex mb-2">
													<span>
														Get peace of mind during emergencies with Ambimed,
														the real-time ambulance tracking website and app.
														Stay updated on your ambulance's location for a
														faster medical&nbsp;response.
														<br />
														<br />
													</span>
												</li>
												<li className="d-flex mb-2" />
											</ul>
										</div>
										<a
											className="btn btn-primary"
											role="button"
											href="https://ambimed.netlify.app/"
											style={{ borderRadius: "15px" }}
										>
											Ambimed&nbsp;
										</a>
									</div>
								</div>
								<span className="badge bg-warning position-absolute top-0 end-0 rounded-bottom-left text-uppercase text-primary">
									Most Popular
								</span>
								<span className="badge bg-warning position-absolute top-0 end-0 rounded-bottom-left text-uppercase text-primary">
									Most Popular
								</span>
								<span className="badge bg-warning position-absolute top-0 end-0 rounded-bottom-left text-uppercase text-primary">
									Most Popular
								</span>
								<span className="badge bg-warning position-absolute top-0 end-0 rounded-bottom-left text-uppercase text-primary">
									Most Popular
								</span>
								<span className="badge bg-warning position-absolute top-0 end-0 rounded-bottom-left text-uppercase text-primary">
									Most Popular
								</span>
							</div>
							<div className="col">
								<div className="card border-warning border-2 h-100">
									<div className="card-body d-flex flex-column justify-content-between p-4">
										<div>
											<h6 className="fw-bold text-muted" />
											<h6
												className="fw-bold text-muted"
												style={{ fontSize: "20px" }}
											>
												<img src="img/2.png" style={{ width: "50px" }} />
												Eko-mart
											</h6>
											<h4
												className="display-5 fw-bold mb-4"
												style={{ fontSize: "28.632px", marginTop: "28px" }}
											>
												An Eco-friendly Ecommerce shop
											</h4>
											<ul className="list-unstyled">
												<li className="d-flex mb-2">
													<span>
														<span style={{ color: "rgb(43, 42, 42)" }}>
															We are friendly e-commerce for eco-friendly
															products. Eko-mart is a platform that provides
															people to choose eco-friendly products for their
															daily needs.
														</span>
														<br />
														<br />
													</span>
												</li>
												<li className="d-flex mb-2">
													<span className="bs-icon-xs bs-icon-rounded bs-icon me-2" />
												</li>
												<li className="d-flex mb-2" />
											</ul>
										</div>
										<a
											className="btn btn-warning"
											role="button"
											href="https://ekomart.co/"
											style={{ borderRadius: "15px" }}
										>
											Eko-mart
										</a>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card border-0 h-100">
									<div className="card-body d-flex flex-column justify-content-between p-4">
										<div className="pb-4">
											<h6 className="fw-bold text-muted" />
											<h6
												className="fw-bold text-muted"
												style={{ fontSize: "20px" }}
											>
												<img src="img/2.png" style={{ width: "50px" }} />
												PeerShala
											</h6>
											<h4
												className="display-5 fw-bold mb-4"
												style={{ fontSize: "28.632px", marginTop: "28px" }}
											>
												Experience a new way of learning!
											</h4>
											<h4 className="display-5 fw-bold mb-4" />
											<ul className="list-unstyled">
												<li className="d-flex mb-2">
													<span>
														Peershala is here to connect students around the
														globe to become a guide and teachers for each other,
														forming a great bond for a lifetime and helping in
														each other’s struggle in learning something new
														every day.&nbsp;
													</span>
												</li>
												<li className="d-flex mb-2" />
												<li className="d-flex mb-2" />
											</ul>
										</div>
										<a
											className="btn btn-primary"
											role="button"
											href="https://www.linkedin.com/company/peershala/"
											style={{ borderRadius: "15px" }}
										>
											PeerShala
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* End: Pricing Clean */}
				</section>

				{/* Start: FAQ */}
				<section className="py-4 py-xl-5 mb-5">
					<div className="container">
						<div className="row mb-2">
							<div className="col-md-8 col-xl-6 text-center mx-auto">
								<h2 className="display-6 fw-bold mb-5">
									<span className="pb-3 underline">FAQs</span>
								</h2>
								<p className="text-muted mb-5" />
							</div>
						</div>
						<div className="row mb-2">
							<div className="col-md-8 mx-auto">
								<div
									className="accordion text-muted"
									role="tablist"
									id="accordion-1"
								>
									<div className="accordion-item">
										<h2 className="accordion-header" role="tab">
											<button
												className="accordion-button"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#accordion-1 .item-1"
												aria-expanded="true"
												aria-controls="accordion-1 .item-1"
											>
												Who can benefit from an incubation center?
											</button>
										</h2>
										<div
											className="accordion-collapse collapse show item-1"
											role="tabpanel"
											data-bs-parent="#accordion-1"
										>
											<div className="accordion-body">
												<p>
													Anyone with an innovative idea, a new product or a
													start-up company can benefit from an incubation
													centre. It is especially useful for early-stage
													start-ups and entrepreneurs who need assistance in
													refining their business model, building a team,
													finding funding and scaling their operations.
												</p>
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" role="tab">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#accordion-1 .item-2"
												aria-expanded="false"
												aria-controls="accordion-1 .item-2"
											>
												How do I apply for an Incubation Centre program?
											</button>
										</h2>
										<div
											className="accordion-collapse collapse item-2"
											role="tabpanel"
											data-bs-parent="#accordion-1"
										>
											<div className="accordion-body">
												<p className="mb-0">
													Nullam id dolor id nibh ultricies vehicula ut id elit.
													Cras justo odio, dapibus ac facilisis in, egestas eget
													quam. Donec id elit non mi porta gravida at eget
													metus.
												</p>
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" role="tab">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#accordion-1 .item-3"
												aria-expanded="false"
												aria-controls="accordion-1 .item-3"
											>
												What services and resources does an Incubation Center
												provide?
											</button>
										</h2>
										<div
											className="accordion-collapse collapse item-3"
											role="tabpanel"
											data-bs-parent="#accordion-1"
										>
											<div className="accordion-body">
												<p className="mb-0">
													Nullam id dolor id nibh ultricies vehicula ut id elit.
													Cras justo odio, dapibus ac facilisis in, egestas eget
													quam. Donec id elit non mi porta gravida at eget
													metus.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* End: FAQ */}

				{/* Start: Contact Us Banner */}
				<section className="py-4 py-xl-5">
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
									href="/contacts.html"
									style={{ borderRadius: "15px" }}
								>
									Contact us
								</a>
							</div>
						</div>
					</div>
				</section>
				{/* End: Contact Us Banner */}

				{/* Start: Footer Multi Column */}

				<footer>
					<div className="container py-4 py-lg-5">
						<div className="row row-cols-2 row-cols-md-4">
							{/* Start: Social Icons */}
							<div className="col-12 col-md-3">
								<div className="fw-bold d-flex align-items-center mb-2">
									<span>Brand</span>
								</div>
								<p className="text-muted">
									Sem eleifend donec molestie, integer quisque orci aliquam.
								</p>
							</div>
							{/* End: Social Icons */}
							{/* Start: About */}
							<div className="col-sm-4 col-md-3 text-lg-start d-flex flex-column">
								<h3 className="fs-6 fw-bold">About</h3>
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
							{/* End: About */}
						</div>
						<hr />
						<div className="text-muted d-flex justify-content-between align-items-center pt-3">
							<p className="mb-0">
								Copyright © CHRIST (Deemed to be University) 2020
							</p>
							<ul className="list-inline mb-0">
								<li className="list-inline-item">
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
								</li>
								<li className="list-inline-item">
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
								</li>
								<li className="list-inline-item">
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
								</li>
							</ul>
						</div>
					</div>
				</footer>
				{/* End: Footer */}
			</div>
		</>
	);
}

export default Home;

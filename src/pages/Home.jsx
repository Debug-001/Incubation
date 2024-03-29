import React from "react";
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'

function Home() {
	return (
		<>
			<Navbar />
			<div>
				<header className="pt-5">
					{/* Start: Hero Clean Reverse */}

					<div
						className="container pt-4 pt-xl-5">
						<div className="row pt-5">
							<div className="col-md-8 text-center text-md-start mx-auto">
								<div className="text-center">
									<h1 className="display-4 fw-bold pt-5 mb-5">
										Working on making a better Future&nbsp;
										<span className="underline">Together</span>.
									</h1>
									<p className="fs-5 text-muted mb-5">
										CHRIST INNOVATION AND INCUBATION CENTER
									</p>
									<form className="d-flex justify-content-center flex-wrap" method="post">
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
							<div className="col-xl-6" id="one">
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
											<h4
												className="fw-bold">Mission&nbsp; &nbsp;</h4>
											<p className="text-muted">
												<span style={{ color: "rgb(123, 120, 120)" }}>
													Our devout is towards progression of entrepreneurial
													culture within the University amidst students, alumni
													faculty and aspirants in nearby areas for social
													development and economic growth of the communities.
												</span>
											</p>
											<button className="btn btn-sm px-0 mx-0" type="button">
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
							<div className="card  mt-5npm border-light border-1 d-flex justify-content-center p-4">
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
									<button className="btn btn-sm px-3 mb-4 mt-4" type="button">
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
					<div className="container py-4 py-xl-5 mt-5">
						<h1 className="fw-bold text-center mb-5 mt-5">CIIC <span className="underline">EVENT</span>  HIGHLIGHTS</h1>
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
											SYNERGY
										</span>
									</h3>
									<p className="text-muted py-4 py-md-0">
										<span style={{ color: "rgb(0, 0, 0)" }}>
											We at CIIC [Christ Incubation and Innovation Centre in collaboration with the Entrepreneurial Club of CUSBMA and Reckons Aisle, the Commerce Association bring to you a massive opportunity to meet the most passionate, supremely admired, deeply dedicated Entrepreneurs of India, at our Mega Event- Entrepreneurial Conclave“Synergy”on 27 th February 2023 from 11:00 a.m. onwards in the auditorium.
										</span>
									</p>
									<button class="btn btn-style btn-primary " onClick={(e) => { e.preventDefault(); window.location.href = 'https://www.linkedin.com/posts/christ-innovation-and-incubation-center_team-management-event-activity-7038095172341014528-RknV/?utm_source=share&utm_medium=member_desktop'; }}>Read more</button>
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
												href="/events"
												style={{ borderRadius: "15px" }}
											>
												Events
											</a>
											<a
												className="btn btn-light mt-2"
												role="button"
												href="/teams"
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
									<img id="img"
										className="flex h-100 fit-contain pt-4 px-3 mx-2 pt-md-0"
										src="img/illustrations/img1.jpg"
										style={{
											width: "446px"
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
							<div className="col-md-6 col-xl-8 text-center mx-auto px-3 ">
								<h2 id="textpad"
									className="display-6 fw-bold mb-4 "
									style={{ fontSize: "35.88px", height: "163.1px" }}
								>
									Launch Your Dreams into
									<br />
									Reality: Join our&nbsp;
									<span className="underline">Incubation Center</span>&nbsp; and
									Build the Future.
								</h2>
								<p id="text-pad"
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
							</div>
							<div className="col">
								<div className="card border-0 h-100">
									<div className="card-body d-flex flex-column justify-content-between p-4">
										<div>
											<h6
												className="fw-bold text-muted"
												style={{ fontSize: "20px" }}
											>
												<img src="img/2.png" style={{ width: "50px" }} />
												Eko-mart
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
														We are friendly e-commerce for eco-friendly
														products. Eko-mart is a platform that provides
														people to choose eco-friendly products for their
														daily needs.
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
											href="https://ekomart.co/"
											style={{ borderRadius: "15px" }}
										>
											Eko-mart&nbsp;
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
									href="/contact"
									style={{ borderRadius: "15px" }}
								>
									Contact us
								</a>
							</div>
						</div>
					</div>
				</section>
				{/* End: Contact Us Banner */}
				<Footer />
			</div>
		</>
	);
}

export default Home;

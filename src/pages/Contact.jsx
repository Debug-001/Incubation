import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
// import emailjs from '@emailjs/browser';

const Contact = () => {
    // const form = useRef();
    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     emailjs.sendForm('service_4b8zuq4', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    // };
    return (
        <>
            <Navbar />
            <div>
                {/* Start: Navbar Centered Links */}    e
                {/* Start: Contact Details */}
                <section className="py-5 mt-5">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-8 col-xl-6 text-center mx-auto">
                                <h2 className="display-6 fw-bold mb-4">Got any <span className="underline">questions</span>?</h2>
                                <p className="text-muted">Our team is always here to help. Send us a message and we'll get back to you shortly.</p>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-6">
                                <div>
                                    <form className="p-3 p-xl-4" method="post">
                                        {/* Start: Success Example */}
                                        <div className="mb-3"><input className="shadow form-control" type="text" id="name-1" name="name" placeholder="Name" /></div>{/* End: Success Example */}
                                        {/* Start: Error Example */}
                                        <div className="mb-3"><input className="shadow form-control" type="email" id="email-1" name="email" placeholder="Email" /></div>{/* End: Error Example */}
                                        <div className="mb-3"><textarea className="shadow form-control" id="message-1" name="message" rows={6} placeholder="Message" defaultValue={""} /></div>
                                        <div><button className="btn btn-primary shadow d-block w-100" type="submit">Send </button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End: Contact Details */}

                {/* Start: Newsletter Subscription Centered */}
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
                {/* Start: Footer Multi Column */}
                <footer>
                    <div className="container py-4 py-lg-5">
                        <div className="row row-cols-2 row-cols-md-4">
                            {/* Start: Social Icons */}
                            <div className="col-12 col-md-3">
                                <div className="fw-bold d-flex align-items-center mb-2"><span>Brand</span></div>
                                <p className="text-muted">Sem eleifend donec molestie, integer quisque orci aliquam.</p>
                            </div>{/* End: Social Icons */}
                            {/* Start: Services */}
                            <div className="col-sm-4 col-md-3 text-lg-start d-flex flex-column">
                                <h3 className="fs-6 fw-bold">Services</h3>
                                <ul className="list-unstyled">
                                    <li><a href="#">Web design</a></li>
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">Hosting</a></li>
                                </ul>
                            </div>{/* End: Services */}
                            {/* Start: About */}
                            <div className="col-sm-4 col-md-3 text-lg-start d-flex flex-column">
                                <h3 className="fs-6 fw-bold">About</h3>
                                <ul className="list-unstyled">
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Legacy</a></li>
                                </ul>
                            </div>{/* End: About */}
                            {/* Start: Careers */}
                            <div className="col-sm-4 col-md-3 text-lg-start d-flex flex-column">
                                <h3 className="fs-6 fw-bold">Careers</h3>
                                <ul className="list-unstyled">
                                    <li><a href="#">Job openings</a></li>
                                    <li><a href="#">Employee success</a></li>
                                    <li><a href="#">Benefits</a></li>
                                </ul>
                            </div>{/* End: Careers */}
                        </div>
                        <hr />
                        <div className="text-muted d-flex justify-content-between align-items-center pt-3">
                            <p className="mb-0">Copyright © CHRIST (Deemed to be University) 2020</p>
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-facebook">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg></li>
                                <li className="list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-twitter">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg></li>
                                <li className="list-inline-item"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-instagram">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                </svg></li>
                            </ul>
                        </div>
                    </div>
                </footer>{/* End: Footer Multi Column */}
            </div>
            <Footer/>
        </>
    )
}

export default Contact

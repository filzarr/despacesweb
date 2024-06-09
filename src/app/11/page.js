import React from 'react'

const Agent = () => {
    return (
        <div className=" ">

            

            <section className="pager-sec bfr">
                <div className="container">
                    <div className="pager-sec-details">
                        <h3>Agent Profile</h3>
                        <ul>
                            <li><a href="#" title="">Home</a></li>
                            <li><span>Agent Profile</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="page-main-content section-padding">
                <div className="container">
                    <div className="agent-profile-sec">
                        <div className="row">
                            <div className="col-xl-8 col-lg-9 col-md-12 pl-0 pr-0">
                                <div className="agent-profile">
                                    <div className="agent-img">
                                        <img src="https://via.placeholder.com/355x407" alt="" />
                                    </div>
                                    <div className="agent-info">
                                        <h3>Tomas Wilkinson</h3>
                                        <h4>Douglas and Eleman Agency</h4>
                                        <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet maurs. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odi non  mauris vitae erat consequat.</p>
                                        <ul className="cont-links">
                                            <li><span><i className="la la-phone"></i>+1 212-925-3797</span></li>
                                            <li><a href="mailto:example@example.com" title=""><i className="la la-envelope"></i>tomas@contact.com</a></li>
                                        </ul>
                                        <ul className="socio-links">
                                            <li><a href="#" title=""><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#" title=""><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#" title=""><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#" title=""><i className="fa fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-3 col-md-12 pr-0">
                                <div className="contact-agent">
                                    <h3>Contact Agent</h3>
                                    <form>
                                        <div className="form-field">
                                            <input type="text" name="name" placeholder="Your Name" />
                                        </div>
                                        <div className="form-field">
                                            <input type="text" name="emal" placeholder="Your Email" />
                                        </div>
                                        <div className="form-field">
                                            <input type="text" name="phone" placeholder="Your Phone" />
                                        </div>
                                        <div className="form-field">
                                            <textarea name="message" placeholder="Your Message"></textarea>
                                        </div>
                                        <div className="form-field">
                                            <button type="submit" className="btn2">Contact</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <a href="#" title="">
                <section className="cta st2 section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="cta-text">
                                    <h2>Discover a home you'll love to stay</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </a>

            <section className="bottom section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-sm-6 col-md-4">
                            <div className="bottom-logo">
                                <img src="assets/images/logo.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-md-3">
                            <div className="bottom-list">
                                <h3>Helpful Links</h3>
                                <ul>
                                    <li>
                                        <a href="18_Half_Map.html" title="">Half Map</a>
                                    </li>
                                    <li>
                                        <a href="#" title="">Register</a>
                                    </li>
                                    <li>
                                        <a href="#" title="">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#" title="">Add Listing</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-5 col-sm-12 col-md-5 pl-0">
                            <div className="bottom-desc">
                                <h3>Aditional Information</h3>
                                <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 

        </div>
    )
}
export default Agent;

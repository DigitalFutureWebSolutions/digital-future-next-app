import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
import FooterSection from "../Component/Footer";
import Link from 'next/link';
import { fetchAPIData } from '../../actions/homeActions';
import { useDispatch, useSelector } from 'react-redux';
// const Preloader = () => (
//     <div id="preloader">
//       <div className="loading" data-loading-text="Digital"></div>
//     </div>
//   );
function Contact() {
    const dispatch = useDispatch();
    const apiSettingData = useSelector((state) => state.apiData.data.apisetting);
    const settingData = apiSettingData && apiSettingData.settings
    const apiServiceData = useSelector((state) => state.apiData.data.apiservice);
    useEffect(() => {
        dispatch(fetchAPIData('apiSetting'));
        dispatch(fetchAPIData('apiService'));
    }, [dispatch]);


    const default_meta_title = settingData && settingData.default_meta_title || '';
    const default_meta_description = settingData?.default_meta_description || '';
    const default_meta_keyword = settingData?.default_meta_keyword || '';
    return (
        <div className="body">
            <Head>
                <title>{default_meta_title}</title>
                <meta name="description" content={default_meta_description} />
                <meta name="keyword" content={default_meta_keyword} />
            </Head>
            <Header apiServiceData = {apiServiceData} />
            <div id="popup-search-box">
                <div className="box-inner-wrap d-flex align-items-center">
                    <form id="form" action="#" method="get" role="search">
                        <input
                            id="popup-search"
                            type="text"
                            name="s"
                            placeholder="Type keywords here..."
                        />
                    </form>
                    <div className="search-close">
                        <i className="fa-sharp fa-regular fa-xmark"></i>
                    </div>
                </div>
            </div>
            <Sidebar data={settingData} />
            {/* {preloaderVisible && <Preloader />} */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <section
                        className="page-header"
                        data-background="assets/img/bg-img/page-header-bg.jpg"
                    >
                        <div className="overlay"></div>
                        <div className="shapes">
                            <div className="shape shape-1">
                                <img src="assets/img/shapes/page-header-shape-1.png" alt="shape" />
                            </div>
                            <div className="shape shape-2">
                                <img src="assets/img/shapes/page-header-shape-2.png" alt="shape" />
                            </div>
                            <div className="shape shape-3">
                                <img src="assets/img/shapes/page-header-shape-3.png" alt="shape" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="page-header-content text-center">
                                <h1 className="title">Contact Us</h1>
                                <h4 className="sub-title">
                                    <Link className="home" href="/">Home </Link>
                                    <span></span>
                                    <Link className="inner-page" href="/contact"> Contact Us</Link>
                                </h4>
                            </div>
                        </div>
                    </section>
                    <section className="contact-section pt-130 pb-130">
                        <div className="container">
                            <div className="row gy-lg-0 gy-5">
                                <div className="col-lg-5 col-md-12">
                                    <div className="contact-content">
                                        <div className="section-heading">
                                            <h4
                                                className="sub-heading after-none"
                                                data-text-animation="fade-in"
                                                data-duration="1.5"
                                            >
                                                Contact Us
                                            </h4>
                                            <h2
                                                className="section-title active"
                                                data-text-animation=""
                                                data-split="word"
                                                data-duration="1"
                                                style={{ opacity: 1 }}
                                            >
                                                <div className="line" style={{ display: 'block', textAlign: 'start', width: '100%' }}>
                                                    <div className="word" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' ,  marginLeft: '6px' }}>
                                                        <div className="char" style={{ display: 'inline-block' }}>L</div>
                                                        <div className="char" style={{ display: 'inline-block' }}>e</div>
                                                        <div className="char" style={{ display: 'inline-block' }}>t</div>
                                                        <div className="char" style={{ display: 'inline-block' }}>’</div>
                                                        <div className="char" style={{ display: 'inline-block' }}>s</div>
                                                    </div>
                                                    <div className="word" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)',  marginLeft: '6px' }}>
                                                        <div className="char" style={{ display: 'inline-block' }}>w</div>
                                                        <div className="char" style={{ display: 'inline-block' }}>o</div>
                                                        <div className="char" style={{ display: 'inline-block' }}>r</div>
                                                        <div className="char" style={{ display: 'inline-block' }}>k</div>
                                                        <div className="char" style={{ display: 'inline-block' }}>i</div>
                                                        <div className="char" style={{ display: 'inline-block' }}>n</div>
                                                        <div className="char" style={{ display: 'inline-block' }}>g</div>
                                                    </div>
                                                    <div className="word" style={{ display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)',  marginLeft: '6px' }}>
                                                        <div className="char" style={{ display: 'inline-block' }}>t</div>
                                                        <div className="char" style={{ display: 'inline-block' }}>o</div>
                                                        <div className="char" style={{ display: 'inline-block' }}>g</div>
                                                        <div className="char" style={{ display: 'inline-block' }}>e</div>
                                                        <div className="char" style={{ display: 'inline-block' }}>t</div>
                                                        <div className="char" style={{ display: 'inline-block' }}>h</div>
                                                        <div className="char" style={{ display: 'inline-block' }}>e</div>
                                                        <div className="char" style={{ display: 'inline-block' }}>r</div>
                                                    </div>
                                                </div>
                                            </h2>

                                            <p>
                                                Thank you for your interest in Attach Web Agency. We
                                                excited to hear from you and discuss...
                                            </p>
                                        </div>
                                        <div className="contact-list">
                                            <div className="list-item">
                                                <div className="icon">
                                                    <i className="fa-light fa-location-dot"></i>
                                                </div>
                                                <div className="content">
                                                    <h4 className="title custom-heading">Our Address</h4>
                                                    <p>
                                                        2690 Hilton Street Victoria Road, <br /> New York, Canada
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="list-item">
                                                <div className="icon">
                                                    <i className="fa-light fa-phone"></i>
                                                </div>
                                                <div className="content">
                                                    <h4 className="title custom-heading">Phone Number</h4>
                                                    <span>
                                                        <a href="tel:+65485965789">(+65) - 48596 - 5789</a>
                                                    </span>
                                                    <span>
                                                        <a href="mailto:hello@acadu.com">hello@acadu.com</a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="list-item">
                                                <div className="icon">
                                                    <i className="fa-light fa-clock"></i>
                                                </div>
                                                <div className="content">
                                                    <h4 className="title custom-heading">Hours of Operation</h4>
                                                    <p>
                                                        <span>Monday - Friday: 09:00 - 20:00</span>
                                                        <span>Sunday & Saturday: 10:30 - 22:00</span>
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="blog-contact-form form-2">
                                        <div className="request-form">
                                            <form
                                                action="mail.php"
                                                method="post"
                                                id="ajax_contact"
                                                className="form-horizontal"
                                            >
                                                <div className="form-group row">
                                                    <div className="col-md-6">
                                                        <div className="form-item">
                                                            <input
                                                                type="text"
                                                                id="fullname"
                                                                name="fullname"
                                                                className="form-control"
                                                                placeholder="Your Name"

                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-item">
                                                            <input
                                                                type="text"
                                                                id="lastname"
                                                                name="lastname"
                                                                className="form-control"
                                                                placeholder="Last Name"

                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-6">
                                                        <div className="form-item">
                                                            <input
                                                                type="text"
                                                                id="email"
                                                                name="email"
                                                                className="form-control"
                                                                placeholder="Email address*"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-item">
                                                            <input
                                                                type="text"
                                                                id="phone"
                                                                name="phone"
                                                                className="form-control"
                                                                placeholder="Phone number*"

                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-12">
                                                        <div className="form-item">
                                                            <div
                                                                className="nice-select select-control form-control country"
                                                                tabIndex="0"
                                                            >
                                                                <span className="current">Select Query Topic</span>
                                                                <ul className="list">
                                                                    <li
                                                                        data-value=""
                                                                        className="option selected focus"
                                                                    >
                                                                        Select Query Topic
                                                                    </li>
                                                                    <li data-value="vdt" className="option">
                                                                        Plan One
                                                                    </li>
                                                                    <li data-value="can" className="option">
                                                                        Plan Two
                                                                    </li>
                                                                    <li data-value="uk" className="option">
                                                                        Plan Three
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-12">
                                                        <div className="form-item message-item">
                                                            <textarea
                                                                id="message"
                                                                name="message"
                                                                cols="30"
                                                                rows="5"
                                                                className="form-control address"
                                                                placeholder="Message"

                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="submit-btn">
                                                    <button id="submit" className="rr-primary-btn" type="submit">
                                                        Submit Message
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="map-wrapper pb-130">
                        <div className="container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8826.923787362664!2d-118.27754354757262!3d34.03471770929568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1566525118697!5m2!1svi!2s"
                                width="100%"
                                height="600"
                                frameBorder="0"
                                style={{ border: '0' }}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <FooterSection data={settingData} />
                </div>
            </div>
            <div id="scroll-percentage"><span id="scroll-percentage-value"></span></div>



        </div>
    )
}

export default Contact
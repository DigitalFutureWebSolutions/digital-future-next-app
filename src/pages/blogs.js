import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
import FooterSection from "../Component/Footer";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPIData } from '../../actions/homeActions';
function Blog() {
    const dispatch = useDispatch();
    const apiSettingData = useSelector((state) => state.apiData.data.apisetting);
    const settingData = apiSettingData && apiSettingData.settings
    const apiBlogsData = useSelector((state) => state.apiData.data.apiblogs);
    useEffect(() => {
        dispatch(fetchAPIData('apiSetting'));
        dispatch(fetchAPIData('apiBlogs'));
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
            <Header />
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
                        style={{ backgroundImage: 'url(assets/img/bg-img/page-header-bg.jpg)' }}
                    >
                        <div className="overlay"></div>
                        <div className="shapes">
                            <div className="shape shape-1">
                                <img
                                    src="assets/img/shapes/page-header-shape-1.png"
                                    alt="shape"
                                />
                            </div>
                            <div className="shape shape-2">
                                <img
                                    src="assets/img/shapes/page-header-shape-2.png"
                                    alt="shape"
                                />
                            </div>
                            <div className="shape shape-3">
                                <img
                                    src="assets/img/shapes/page-header-shape-3.png"
                                    alt="shape"
                                />
                            </div>
                        </div>
                        <div className="container">
                            <div className="page-header-content text-center">
                                <h1 className="title text-white">Blogs</h1>
                                <h4 className="sub-title">
                                    <Link className="home" href="/">Home</Link>
                                    <span></span>
                                    <Link className="inner-page" href="/blogs">Blogs</Link>
                                </h4>
                            </div>
                        </div>
                    </section>
                    <section className="blog-section pt-130 pb-130">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="grid-post-wrap-2">
                                        {/* Blog Post 1 */}
                                        {
                                            apiBlogsData && apiBlogsData.blogs && apiBlogsData.blogs.length > 0 ? (
                                                apiBlogsData.blogs.map((item, index) => (
                                                    <div key={index} className="post-card-2 card-3 inner-blog-2">
                                                        <div className="post-thumb">
                                                            <img
                                                                src={item.image}
                                                                alt="blog"
                                                            />
                                                        </div>
                                                        <div className="post-content-wrap">
                                                            <div className="post-content">
                                                                <ul className="post-meta">
                                                                    <li>
                                                                        <i className="fa-sharp fa-regular fa-clock"></i>
                                                                        {item.created_date}
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa-light fa-user"></i>
                                                                        Post by: Admin
                                                                    </li>
                                                                </ul>
                                                                <h3 className="title">
                                                                    <Link href={`/blog/${item.slug}`}>
                                                                     {item.title}
                                                                    </Link>
                                                                </h3>
                                                                <p>
                                                                   {item.desc}
                                                                </p>
                                                                <Link href={`/blog/${item.slug}`} className="rr-primary-btn">
                                                                    Read More <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                                                    </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : ""
                                        }


                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <FooterSection data={settingData}/>
                </div>
            </div>
            <div id="scroll-percentage"><span id="scroll-percentage-value"></span></div>

            {/* <div id="theme-toogle" className="switcher-button">
                <div className="switcher-button-inner-left"></div>
                <div className="switcher-button-inner"></div>
            </div> */}
        </div>
    )
}

export default Blog
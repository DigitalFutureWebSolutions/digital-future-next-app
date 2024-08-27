import React from 'react';
import Head from 'next/head';
import Header from '../../Component/Header';
import Link from 'next/link';
import Sidebar from '../../Component/Sidebar';
import FooterSection from "../../Component/Footer";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactHtmlParser from 'html-react-parser';


const BlogDetails = () => {


    // Define backgroundStyle outside of useEffect
    const backgroundStyle = {
        backgroundImage: 'url(/assets/img/bg-img/page-header-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    const router = useRouter();
    const { slug } = router.query;
    const [settingdata, setSettingData] = useState(null);
    const [data, setData] = useState(null);
    const [blogData, setblogData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        if (!slug) return;
        const apiUrl = `https://dfweb-v2.onrender.com/api/v1/api-blogs/${slug}`;

        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        const blogData = async () => {
            try {
                const response = await fetch('https://dfweb-v2.onrender.com/api/v1/api-blogs');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setblogData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        const fetchSettingData = async () => {
            try {
                const response = await fetch('https://dfweb-v2.onrender.com/api/v1/api-settings');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setSettingData(result.settings);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData(), blogData() , fetchSettingData(); 
    }, [slug]);


    const description = data && data.blog && data.blog.description
        ? data.blog.description
        : '';
        const meta_title = data?.blog?.meta_title || '';
        const meta_description = data?.blog?.meta_description || '';
        const meta_keyword = data?.blog?.meta_keyword || '';

    return (
        <div>
            {data ? (
                <div className="body">
                     <Head>
                        <title>{meta_title}</title>
                        <meta name="description" content={meta_description} />
                        <meta name="keyword" content={meta_keyword} />
                    </Head>
                    <Header />
                    <div id="popup-search-box">
                        <div className="box-inner-wrap d-flex align-items-center">
                            <form id="form" action="#" method="get" role="search">
                                <input id="popup-search" type="text" name="s" placeholder="Type keywords here..." />
                            </form>
                            <div className="search-close"><i className="fa-sharp fa-regular fa-xmark"></i></div>
                        </div>
                    </div>
                    <Sidebar data={settingdata}/>
                    {/* <div id="preloader">
           <div className="loading" data-loading-text="Runok"></div>
       </div> */}
                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            <section className="page-header" style={backgroundStyle}>
                                <div className="overlay"></div>
                                <div className="shapes">
                                    <div className="shape shape-1">
                                        <img src="/assets/img/shapes/page-header-shape-1.png" alt="shape" />
                                    </div>
                                    <div className="shape shape-2">
                                        <img src="/assets/img/shapes/page-header-shape-2.png" alt="shape" />
                                    </div>
                                    <div className="shape shape-3">
                                        <img src="/assets/img/shapes/page-header-shape-3.png" alt="shape" />
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="page-header-content text-center">
                                        <h1 className="title text-white">{data && data.blog && data.blog.title ? data.blog.title : ""}</h1>
                                        <h4 className="sub-title">
                                            <Link className="home" href="/">Home</Link>
                                            <Link className="home" href="/blog">Blog</Link>
                                            <Link className="inner-page custom-heading" href={`/blog/${data.blog.slug}`}>{data && data.blog && data.blog.title ? data.blog.title : ""}</Link>
                                        </h4>
                                    </div>
                                </div>
                            </section>
                            <section className="service-details pt-130 pb-130">
                                <div className="container">
                                    <div className="row gy-lg-0 gy-5">
                                        <div className="col-lg-8 col-md-12">
                                            <div className="sidebar-content-wrap">
                                                <div className="service-details-img">
                                                    <img src={data && data.blog && data.blog.image ? data.blog.image : " "} alt="blog" />
                                                </div>
                                                <div className="service-details-content">
                                                    <h2 className="title custom-heading">{data && data.blog && data.blog.title ? data.blog.title : ""}</h2>
                                                    <p className="mb-30"> {ReactHtmlParser(description)}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12">
                                            <div className="service-widget">
                                                <h3 className="widget-title custom-heading">Blogs</h3>
                                                <ul className="category-list">

                                               

                                                    {blogData && blogData.blogs && blogData.blogs.length > 0 ? (
                                                        blogData.blogs.map((item, index) => (
                                                            <li key={index} className={item.slug === data.blog.slug ? "active" : ""}>
                                                                <Link href={`/blog/${item.slug}`}>
                                                                    <i className="fa-sharp fa-regular fa-arrow-right"></i>{item.title}
                                                                    </Link>
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <li></li>
                                                    )}


                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section>
                            <FooterSection data={settingdata}/>
                        </div>
                    </div>
                    <div id="scroll-percentage"><span id="scroll-percentage-value"></span></div>

                    {/* <div id="theme-toogle" className="switcher-button">
                        <div className="switcher-button-inner-left"></div>
                        <div className="switcher-button-inner"></div>
                    </div> */}

                </div>
            ) : (
                <p></p>
            )}
        </div>
    );
};

export default BlogDetails;

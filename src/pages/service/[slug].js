import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../../Component/Header';
import Link from 'next/link';
import Sidebar from '../../Component/Sidebar';
import FooterSection from "../../Component/Footer";
import { useRouter } from 'next/router';
import ReactHtmlParser from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPIData } from '../../../actions/homeActions';

const ServiceDetails = () => {
    const dispatch = useDispatch();
    const apiSettingData = useSelector((state) => state.apiData.data.apisetting);
    const settingData = apiSettingData?.settings || null;
    const apiServiceData = useSelector((state) => state.apiData.data.apiservice);
    const router = useRouter();
    const { slug } = router.query;
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!slug) return;

        const fetchData = async () => {
            try {
                const response = await fetch(`https://dfweb-v2.onrender.com/api/v1/api-services/${slug}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result.blog);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        dispatch(fetchAPIData('apiService'));
        dispatch(fetchAPIData('apiSetting'));
        fetchData();
    }, [slug, dispatch]);

    const serviceSlug = data?.slug || {};
    const description = data?.description || '';
    const meta_title = data?.meta_title || '';
    const meta_description = data?.meta_description || '';
    const meta_keyword = data?.meta_keyword || '';
console.log("dataaaaaaaa", serviceSlug);

    const backgroundStyle = {
        backgroundImage: 'url(/assets/img/bg-img/page-header-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="body">
            <Head>
                <title>{meta_title}</title>
                <meta name="description" content={meta_description} />
                <meta name="keywords" content={meta_keyword} />
            </Head>
            <Header apiServiceData={apiServiceData} />
            <div id="popup-search-box">
                <div className="box-inner-wrap d-flex align-items-center">
                    <form id="form" action="#" method="get" role="search">
                        <input id="popup-search" type="text" name="s" placeholder="Type keywords here..." />
                    </form>
                    <div className="search-close"><i className="fa-sharp fa-regular fa-xmark"></i></div>
                </div>
            </div>
            <Sidebar data={settingData} />
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
                                <h1 className="title text-white">{data?.title || ''}</h1>
                                <h4 className="sub-title">
                                    <Link className="home" href="/">Home</Link>
                                    <Link className="home" href="/service">Service</Link>
                                    <Link className="inner-page custom-heading" href={`/service/${slug}`}>{data?.title || ''}</Link>
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
                                            <img src={data?.image || "/assets/img/default.jpg"} alt="service" />
                                        </div>
                                        <div className="service-details-content">
                                            <h2 className="title custom-heading">{data?.title || ''}</h2>
                                            <p className="mb-30">
                                                {ReactHtmlParser(description)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="service-widget">
                                        <h3 className="widget-title custom-heading">Services</h3>
                                        <ul className="category-list">
                                            {apiServiceData?.blogs?.length > 0 ? (
                                                apiServiceData.blogs.map((item, index) => (
                                                    <li key={index} className={item.slug === serviceSlug ? "active" : ""}>
                                                        <Link href={`/service/${item.slug}`}>
                                                            <i className="fa-sharp fa-regular fa-arrow-right"></i>{item.title}
                                                        </Link>
                                                    </li>
                                                ))
                                            ) : (
                                                <li>No services available</li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <FooterSection data={settingData} />
                </div>
            </div>
            <div id="scroll-percentage"><span id="scroll-percentage-value"></span></div>
        </div>
    );
};

export default ServiceDetails;

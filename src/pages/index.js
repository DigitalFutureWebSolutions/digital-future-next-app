import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from "../Component/Header";
import Sidebar from '../Component/Sidebar';
import HeroSection from "../Component/HeroSection";
import ProcessSection from "../Component/ProcessSection";
import Service from "../Component/Service";
import AboutSection from "../Component/AboutSection";
import FAQSection from "../Component/Faq";
import TestimonialSection from "../Component/Testimonial";
import ProjectSection from "../Component/Project";
import BlogSection from "../Component/Blog";
import FooterSection from "../Component/Footer";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPIData } from '../../actions/homeActions';

export default function Home() {
    const dispatch = useDispatch();
    const apiServiceData = useSelector((state) => state.apiData.data.apiservice);
    const apiSettingData = useSelector((state) => state.apiData.data.apisetting);
    const apiFAQData = useSelector((state) => state.apiData.data.apifaq);
    const apiTestimonialsData = useSelector((state) => state.apiData.data.apitestimonials);
    const apiBlogsData = useSelector((state) => state.apiData.data.apiblogs);
    const settingData = apiSettingData && apiSettingData.settings
    const [loading, setLoading] = useState(true);
    const [defaultMeta, setDefaultMeta] = useState({
        title: '',
        description: '',
        keyword: ''
    });

    useEffect(() => {
        dispatch(fetchAPIData('apiService'));
        dispatch(fetchAPIData('apiSetting'));
        dispatch(fetchAPIData('apiFaq'));
        dispatch(fetchAPIData('apiTestimonials'));
        dispatch(fetchAPIData('apiBlogs'));
    }, [dispatch]);

    useEffect(() => {
        if (settingData ) {
            const { default_meta_title, default_meta_description, default_meta_keyword } = settingData;
            setDefaultMeta({
                title: default_meta_title || '',
                description: default_meta_description || '',
                keyword: default_meta_keyword || ''
            });
            setLoading(false);
        }
    }, [settingData]);


    return (
        <>
            <div className="body">
                <Head>
                    <title>{defaultMeta.title}</title>
                    <meta name="description" content={defaultMeta.description} />
                    <meta name="keyword" content={defaultMeta.keyword} />
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
                        <HeroSection />
                        <ProcessSection />
                        <AboutSection />
                        <Service apiServiceData={apiServiceData} />
                        <FAQSection apiFAQData = {apiFAQData} />
                        <TestimonialSection apiTestimonialsData= {apiTestimonialsData} />
                        <ProjectSection />
                        <BlogSection apiBlogsData = {apiBlogsData} />
                        <FooterSection data={settingData} />
                    </div>
                </div>
                <div id="scroll-percentage"><span id="scroll-percentage-value"></span></div>
            </div>
        </>
    );
}

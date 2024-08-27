import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'html-react-parser';
const TestimonialSection = ({apiTestimonialsData}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Initialize Swiper only if data is loaded and available
        if (window.Swiper && !loading && apiTestimonialsData && apiTestimonialsData.blogs && apiTestimonialsData.blogs.length > 0) {
            const swiperInstance = new window.Swiper('.swiper-container', {
                slidesPerView: 3,
                spaceBetween: 24,
                slidesPerGroup: 1,
                loop: true,
                autoplay: {
                    delay: 3000,
                },
                grabCursor: true,
                speed: 400,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 25,
                    },
                    767: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                    },
                },
            });

            swiperInstance.update();

            // Cleanup swiper instance
            return () => {
                if (swiperInstance) swiperInstance.destroy();
            };
        }
    }, [loading, apiTestimonialsData]);

    return (
        <>
            <section className="testimonial-section overflow-hidden">
                <div className="container">
                    <div className="swiper-container testi-carousel">
                        <div className="swiper-wrapper">
                            {apiTestimonialsData && apiTestimonialsData.blogs && apiTestimonialsData.blogs.length > 0 ? (
                                apiTestimonialsData.blogs.map((item, index) => (
                                    <div key={index} className="swiper-slide">
                                        <div className="testi-item text-center">
                                            <div className="testi-thumb">
                                                <img src={item.image} alt="img" />
                                            </div>
                                            <div className="testi-content">
                                                <h3 className="author">
                                                    {item.title} <span>{item.designation}</span>
                                                </h3>
                                                {item.description ? (
                                                    <div>{ReactHtmlParser(item.description)}</div>
                                                ) : (
                                                    <p></p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p></p>
                            )}
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialSection;

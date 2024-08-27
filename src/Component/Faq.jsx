import React from 'react';
import { useEffect, useState } from 'react';
import ReactHtmlParser from 'html-react-parser';

const FAQSection = ({apiFAQData}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>

      <section className="faq-section pt-130 pb-130">
        <div className="faq-shape">
          <img src="assets/img/shapes/faq-shape-1.png" alt="shape" />
        </div>
        <div className="faq-top-shape"></div>
        <div className="container">
          <div className="row gy-lg-0 gy-4">
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="faq-content">
                <div className="section-heading">
                  <h4
                    className="sub-heading after-none"
                    data-text-animation="fade-in"
                    data-duration="1.5"
                  >
                    Just Ask us some question
                  </h4>
                  <h2
                    className="section-title active"
                    data-text-animation=""
                    data-split="word"
                    data-duration="1"
                    style={{ opacity: 1 }}
                  >
                    <div className="line" style={{ display: 'block', textAlign: 'start', width: '100%' }}>
                      <div
                        className="word"
                        style={{
                          display: 'inline-block',
                          transform: 'translate(0px, 0px)',
                          opacity: 1,
                        }}
                      >
                        <div className="char" style={{ display: 'inline-block' }}>D</div>
                        <div className="char" style={{ display: 'inline-block' }}>i</div>
                        <div className="char" style={{ display: 'inline-block' }}>g</div>
                        <div className="char" style={{ display: 'inline-block' }}>i</div>
                        <div className="char" style={{ display: 'inline-block' }}>t</div>
                        <div className="char" style={{ display: 'inline-block' }}>a</div>
                        <div className="char" style={{ display: 'inline-block' }}>l</div>
                      </div>
                      <div
                        className="word"
                        style={{
                          display: 'inline-block',
                          transform: 'translate(0px, 0px)',
                          opacity: 1,
                          marginLeft: '5px',
                        }}
                      >
                        <div className="char" style={{ display: 'inline-block' }}>S</div>
                        <div className="char" style={{ display: 'inline-block' }}>o</div>
                        <div className="char" style={{ display: 'inline-block' }}>l</div>
                        <div className="char" style={{ display: 'inline-block' }}>u</div>
                        <div className="char" style={{ display: 'inline-block' }}>t</div>
                        <div className="char" style={{ display: 'inline-block' }}>i</div>
                        <div className="char" style={{ display: 'inline-block' }}>o</div>
                        <div className="char" style={{ display: 'inline-block' }}>n</div>
                      </div>
                      <div
                        className="word"
                        style={{
                          display: 'inline-block',
                          transform: 'translate(0px, 0px)',
                          opacity: 1,
                          marginLeft: '5px',
                        }}
                      >
                        <div className="char" style={{ display: 'inline-block' }}>T</div>
                        <div className="char" style={{ display: 'inline-block' }}>h</div>
                        <div className="char" style={{ display: 'inline-block' }}>a</div>
                        <div className="char" style={{ display: 'inline-block' }}>t</div>
                      </div>
                      <div
                        className="word"
                        style={{
                          display: 'inline-block',
                          transform: 'translate(0px, 0px)',
                          opacity: 1,
                          marginLeft: '5px',
                        }}
                      >
                        <div className="char" style={{ display: 'inline-block' }}>I</div>
                        <div className="char" style={{ display: 'inline-block' }}>m</div>
                        <div className="char" style={{ display: 'inline-block' }}>p</div>
                        <div className="char" style={{ display: 'inline-block' }}>r</div>
                        <div className="char" style={{ display: 'inline-block' }}>o</div>
                        <div className="char" style={{ display: 'inline-block' }}>v</div>
                        <div className="char" style={{ display: 'inline-block' }}>e</div>
                      </div>
                    </div>
                    <div className="line" style={{ display: 'block', textAlign: 'start', width: '100%' }}>
                      <div
                        className="word"
                        style={{
                          display: 'inline-block',
                          transform: 'translate(0px, 0px)',
                          opacity: 1,
                        }}
                      >
                        <div className="char" style={{ display: 'inline-block' }}>Y</div>
                        <div className="char" style={{ display: 'inline-block' }}>o</div>
                        <div className="char" style={{ display: 'inline-block' }}>u</div>
                        <div className="char" style={{ display: 'inline-block' }}>r</div>
                      </div>
                      <div
                        className="word"
                        style={{
                          display: 'inline-block',
                          transform: 'translate(0px, 0px)',
                          opacity: 1,
                          marginLeft: '5px',
                        }}
                      >
                        <div className="char" style={{ display: 'inline-block' }}>A</div>
                        <div className="char" style={{ display: 'inline-block' }}>g</div>
                        <div className="char" style={{ display: 'inline-block' }}>e</div>
                        <div className="char" style={{ display: 'inline-block' }}>n</div>
                        <div className="char" style={{ display: 'inline-block' }}>c</div>
                        <div className="char" style={{ display: 'inline-block' }}>y</div>
                      </div>
                      <div
                        className="word"
                        style={{
                          display: 'inline-block',
                          transform: 'translate(0px, 0px)',
                          opacity: 1,
                          marginLeft: '5px',
                        }}
                      >
                        <div className="char" style={{ display: 'inline-block' }}>G</div>
                        <div className="char" style={{ display: 'inline-block' }}>r</div>
                        <div className="char" style={{ display: 'inline-block' }}>o</div>
                        <div className="char" style={{ display: 'inline-block' }}>w</div>
                        <div className="char" style={{ display: 'inline-block' }}>t</div>
                        <div className="char" style={{ display: 'inline-block' }}>h</div>
                      </div>
                    </div>
                  </h2>

                </div>
                <div className="accordion" id="accordionExampleTwo">
                  {apiFAQData && apiFAQData.blogs && apiFAQData.blogs.length > 0 ? (
                    apiFAQData.blogs.map((item, index) => (
                      <div key={index} className="accordion-item">
                        <h2 className="accordion-header  " id={`heading${index}`} >
                          <button
                            className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => handleAccordionClick(index)}
                            aria-expanded={activeIndex === index}
                            aria-controls={`collapse${index}`}
                          >
                            {item && item.question ? item.question : ""}
                          </button>
                        </h2>
                        <div
                          id={`collapse${index}`}
                          className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                          aria-labelledby={`heading${index}`}
                          data-bs-parent="#accordionExampleTwo"
                        >
                          <div className="accordion-body">
                            {item && item.answer ? ReactHtmlParser(item.answer) : ""}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="faq-img reveal text-center">
                <img src="assets/img/images/faq-img.png" alt="faq" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="running-text testi">
        <div className="carouselTicker carouselTicker-nav" data-speed="fast">
          <ul className="text-anim carouselTicker__list">
            <li>Customer Testimonial .</li>
            <li>Client Feedbacks</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FAQSection;

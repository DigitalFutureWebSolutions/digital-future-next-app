import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="about-section pb-130">
      <div className="round-shape">
        <img
          src="/assets/img/shapes/round-shape.png"
          alt="shape"
          layout="fill"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="about-wrap">
        <div className="shape">
          <img
            src="/assets/img/shapes/about-dot-shape.png"
            alt="shape"
            layout="fill"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="row about-wrapper align-items-center">
          <div className="col-lg-7">
            <div className="about-content fade-wrapper">
              <div className="section-heading mb-0">
                <h4
                  className="sub-heading"
                  data-text-animation="fade-in"
                  data-duration="1.5"
                >
                  About Our Company
                </h4>
                <h2
                  className="section-title overflow-hidden active"
                  data-text-animation=""
                  data-split="word"
                  data-duration="1"
                  style={{ opacity: 1 }}
                >
                  <div className="line" style={{ display: 'block', textAlign: 'start', width: '100%' }}>
                    <div
                      className="word"
                      style={{ display: 'inline-block', transform: 'translate(0px, 0px)', opacity: 1 }}
                    >
                      <div className="char" style={{ display: 'inline-block' }}>W</div>
                      <div className="char" style={{ display: 'inline-block' }}>e</div>
                    </div>
                    <div
                      className="word"
                      style={{ display: 'inline-block', transform: 'translate(0px, 0px)', opacity: 1, marginLeft: '5px' }}
                    >
                      <div className="char" style={{ display: 'inline-block' }}>p</div>
                      <div className="char" style={{ display: 'inline-block' }}>r</div>
                      <div className="char" style={{ display: 'inline-block' }}>o</div>
                      <div className="char" style={{ display: 'inline-block' }}>v</div>
                      <div className="char" style={{ display: 'inline-block' }}>i</div>
                      <div className="char" style={{ display: 'inline-block' }}>d</div>
                      <div className="char" style={{ display: 'inline-block' }}>e</div>
                    </div>
                    <div
                      className="word"
                      style={{ display: 'inline-block', transform: 'translate(0px, 0px)', opacity: 1, marginLeft: '5px' }}
                    >
                      <div className="char" style={{ display: 'inline-block' }}>b</div>
                      <div className="char" style={{ display: 'inline-block' }}>e</div>
                      <div className="char" style={{ display: 'inline-block' }}>s</div>
                      <div className="char" style={{ display: 'inline-block' }}>t</div>
                    </div>
                    <div
                      className="word"
                      style={{ display: 'inline-block', transform: 'translate(0px, 0px)', opacity: 1, marginLeft: '5px' }}
                    >
                      <div className="char" style={{ display: 'inline-block' }}>w</div>
                      <div className="char" style={{ display: 'inline-block' }}>e</div>
                      <div className="char" style={{ display: 'inline-block' }}>b</div>
                    </div>
                    <div
                      className="word"
                      style={{ display: 'inline-block', transform: 'translate(0px, 0px)', opacity: 1, marginLeft: '5px' }}
                    >
                      <div className="char" style={{ display: 'inline-block' }}>d</div>
                      <div className="char" style={{ display: 'inline-block' }}>e</div>
                      <div className="char" style={{ display: 'inline-block' }}>s</div>
                      <div className="char" style={{ display: 'inline-block' }}>i</div>
                      <div className="char" style={{ display: 'inline-block' }}>g</div>
                      <div className="char" style={{ display: 'inline-block' }}>n</div>
                    </div>
                  </div>

                  <div className="line" style={{ display: 'block', textAlign: 'start', width: '100%', marginTop: '10px' }}>
                    <div
                      className="word"
                      style={{ display: 'inline-block', transform: 'translate(0px, 0px)', opacity: 1 }}
                    >
                      <div className="char" style={{ display: 'inline-block' }}>s</div>
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
                      style={{ display: 'inline-block', transform: 'translate(0px, 0px)', opacity: 1, marginLeft: '5px' }}
                    >
                      <div className="char" style={{ display: 'inline-block' }}>i</div>
                      <div className="char" style={{ display: 'inline-block' }}>n</div>
                    </div>
                    <div
                      className="word"
                      style={{ display: 'inline-block', transform: 'translate(0px, 0px)', opacity: 1, marginLeft: '5px' }}
                    >
                      <div className="char" style={{ display: 'inline-block' }}>c</div>
                      <div className="char" style={{ display: 'inline-block' }}>i</div>
                      <div className="char" style={{ display: 'inline-block' }}>t</div>
                      <div className="char" style={{ display: 'inline-block' }}>y</div>
                    </div>
                  </div>
                </h2>


                <p>
                  Digital marketing is the act of promoting and selling products
                  and services by leveraging online marketing tactics such as
                  social media marketing, search marketing, and email marketing.
                  When you get down to it, digital marketing is simply marketing.
                </p>
                <a href="about.html" className="rr-primary-btn">
                  Get Started Now
                  <i className="fa-regular fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-img-wrap">
              <div className="img-shape"></div>
              <div className="about-img reveal">
                <img
                  className="img-1"
                  src="\assets\img\images\about-img.jpg"
                  alt="img"
                  layout="fill"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="about-img-2 reveal">
                <img
                  className="img-2"
                  src="/assets/img/images/about-img-1.jpg"
                  alt="img"
                  layout="fill"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="about-text">
          {/* <img
            className="dark-img"
            src="/assets/img/images/about-text.png"
            alt="about"
            layout="fill"
            objectFit="cover"
          /> */}
          <img
            className="light-img"
            src="/assets/img/images/about-text-light.png"
            alt="about"
            layout="fill"
            style={{ objectFit: 'cover' }}
            width={660}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


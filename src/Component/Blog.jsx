
import Link from 'next/link';

const BlogSection = ({apiBlogsData}) => {

  return (

    <>
      <section className="blog-section pt-130 pb-130 fade-wrapper">
        <div className="container">
          <div className="section-heading text-center">
            <h4
              className="sub-heading active"
              data-text-animation="fade-in"
              data-duration="1.5"
              style={{ opacity: 1 }}
            >
              <div
                className="line"
                style={{ display: 'block', textAlign: 'center', width: '100%', opacity: 1 }}
              >
                <div
                  className="word"
                  style={{ display: 'inline-block', transform: 'translate(0px, 0px)', opacity: 1, marginLeft: '4px' }}
                >
                  <div className="char" style={{ display: 'inline-block' }}>N</div>
                  <div className="char" style={{ display: 'inline-block' }}>E</div>
                  <div className="char" style={{ display: 'inline-block' }}>W</div>
                  <div className="char" style={{ display: 'inline-block' }}>S</div>
                </div>
                <div
                  className="word"
                  style={{ display: 'inline-block', transform: 'translate(0px, 0px)', opacity: 1, marginLeft: '4px' }}
                >
                  <div className="char" style={{ display: 'inline-block' }}>&amp;</div>
                </div>
                <div
                  className="word"
                  style={{ display: 'inline-block', transform: 'translate(0px, 0px)', opacity: 1, marginLeft: '4px' }}
                >
                  <div className="char" style={{ display: 'inline-block' }}>L</div>
                  <div className="char" style={{ display: 'inline-block' }}>A</div>
                  <div className="char" style={{ display: 'inline-block' }}>T</div>
                  <div className="char" style={{ display: 'inline-block' }}>E</div>
                  <div className="char" style={{ display: 'inline-block' }}>S</div>
                  <div className="char" style={{ display: 'inline-block' }}>T</div>
                </div>
                <div
                  className="word"
                  style={{ display: 'inline-block', transform: 'translate(0px, 0px)', opacity: 1, marginLeft: '4px' }}
                >
                  <div className="char" style={{ display: 'inline-block' }}>U</div>
                  <div className="char" style={{ display: 'inline-block' }}>P</div>
                  <div className="char" style={{ display: 'inline-block' }}>D</div>
                  <div className="char" style={{ display: 'inline-block' }}>A</div>
                  <div className="char" style={{ display: 'inline-block' }}>T</div>
                  <div className="char" style={{ display: 'inline-block' }}>E</div>
                  <div className="char" style={{ display: 'inline-block' }}>S</div>
                </div>
              </div>
            </h4>

            <h2
              className="section-title"
              data-text-animation=""
              data-split="word"
              data-duration="1"
              style={{ opacity: 1 }}
            >
              <div
                className="line"
                style={{ display: 'block', textAlign: 'center', width: '100%' }}
              >
                <div
                  className="word"
                  style={{ display: 'inline-block', transform: 'translate(0px, 0px)', opacity: 1, marginLeft: '5px' }}
                >
                  <div className="char" style={{ display: 'inline-block' }}>C</div>
                  <div className="char" style={{ display: 'inline-block' }}>h</div>
                  <div className="char" style={{ display: 'inline-block' }}>e</div>
                  <div className="char" style={{ display: 'inline-block' }}>c</div>
                  <div className="char" style={{ display: 'inline-block' }}>k</div>
                </div>
                <div
                  className="word"
                  style={{ display: 'inline-block', transform: 'translate(0px, 0px)', opacity: 1, marginLeft: '5px' }}
                >
                  <div className="char" style={{ display: 'inline-block' }}>O</div>
                  <div className="char" style={{ display: 'inline-block' }}>u</div>
                  <div className="char" style={{ display: 'inline-block' }}>r</div>
                </div>
                <div
                  className="word"
                  style={{ display: 'inline-block', transform: 'translate(0px, 0px)', opacity: 1, marginLeft: '5px' }}
                >
                  <div className="char" style={{ display: 'inline-block' }}>C</div>
                  <div className="char" style={{ display: 'inline-block' }}>o</div>
                  <div className="char" style={{ display: 'inline-block' }}>m</div>
                  <div className="char" style={{ display: 'inline-block' }}>p</div>
                  <div className="char" style={{ display: 'inline-block' }}>a</div>
                  <div className="char" style={{ display: 'inline-block' }}>n</div>
                  <div className="char" style={{ display: 'inline-block' }}>y</div>
                </div>
                <div
                  className="word"
                  style={{ display: 'inline-block', transform: 'translate(0px, 0px)', opacity: 1, marginLeft: '5px' }}
                >
                  <div className="char" style={{ display: 'inline-block' }}>I</div>
                  <div className="char" style={{ display: 'inline-block' }}>n</div>
                  <div className="char" style={{ display: 'inline-block' }}>s</div>
                  <div className="char" style={{ display: 'inline-block' }}>i</div>
                  <div className="char" style={{ display: 'inline-block' }}>d</div>
                  <div className="char" style={{ display: 'inline-block' }}>e</div>
                </div>
                <div
                  className="word"
                  style={{ display: 'inline-block', transform: 'translate(0px, 0px)', opacity: 1, marginLeft: '5px' }}
                >
                  <div className="char" style={{ display: 'inline-block' }}>S</div>
                  <div className="char" style={{ display: 'inline-block' }}>t</div>
                  <div className="char" style={{ display: 'inline-block' }}>o</div>
                  <div className="char" style={{ display: 'inline-block' }}>r</div>
                  <div className="char" style={{ display: 'inline-block' }}>y</div>
                </div>
              </div>
            </h2>

          </div>
          <div className="post-wrap">
            {
              apiBlogsData && apiBlogsData.blogs && apiBlogsData.blogs.length > 0 ? (
                apiBlogsData.blogs.map((item, index) => (
                  <div key={index} className="post-card-wrap fade-top">
                    <div className="post-card">
                      <div className="post-thumb">
                        <img src={item.image} alt="post" />
                      </div>
                      <div className="post-content-wrap">
                        <div className="post-content">
                          <ul className="post-meta">
                            <li><i className="fa-sharp fa-regular fa-clock"></i> {item.created_date}</li>
                            <li><i className="fa-light fa-user"></i>Post by: Admin</li>
                          </ul>
                          <h3 className="title custom-heading">
                            <Link href={`/blog/${item.slug}`}>
                              {item.title}
                            </Link>
                          </h3>
                          <Link href={`/blog/${item.slug}`} className="rr-primary-btn blog-btn">
                            Read More <i className="fa-sharp fa-regular fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : ""
            }
          </div>
        </div>
      </section>

      {/* <section className="sponsor-section pb-130">
        <div className="container">
          <div className="sponsor-wrap">
            <div className="sponsor-item item-1">
              <h3 className="title custom-heading">
                WORKED WITH <br /> GLOBAL LARGEST <br /> BRANDS
              </h3>
            </div>
            <div className="sponsor-item">
              <a href="#">
                <img src="assets/img/sponsor/sponsor-1.png" alt="sponsor" />
              </a>
            </div>
            <div className="sponsor-item">
              <a href="#">
                <img src="assets/img/sponsor/sponsor-2.png" alt="sponsor" />
              </a>
            </div>
            <div className="sponsor-item">
              <a href="#">
                <img src="assets/img/sponsor/sponsor-3.png" alt="sponsor" />
              </a>
            </div>
            <div className="sponsor-item">
              <a href="#">
                <img src="assets/img/sponsor/sponsor-4.png" alt="sponsor" />
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </>

  );
};

export default BlogSection;

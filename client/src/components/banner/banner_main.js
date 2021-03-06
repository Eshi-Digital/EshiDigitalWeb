import { Link } from 'react-router-dom';

const MainBanner = () => {
  return (
    <>
      <section class="hero-section pb-10">
        <img
          class="shape shape1"
          src="assets/images/hero/shape1.png"
          alt="img_not_found"
        />
        <img
          class="shape shape2"
          src="assets/images/hero/shape2.png"
          alt="img_not_found"
        />
        <img
          class="shape particle2"
          src="assets/images/hero/particle1.png"
          alt="img_not_found"
        />
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-xl-6">
              <div class="hero-content">
                <h2 class="title">Eshi Digital Solutions</h2>
                <div className="text-justify">
                  <p>Eshi is a Digital Solution provider HQ’d in Ethiopia.</p>
                </div>

                <img
                  class="particle3"
                  src="assets/images/hero/particle3.png"
                  alt="particle2"
                />
              </div>
            </div>
            <div class="col-lg-7 col-xl-6">
              <div class="hero-img ml-2">
                <img
                  class="animate-one"
                  src="assets/images/hero/1.png"
                  alt="img_not_found"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                />
                <div class="position-absolute animate-two ml-5">
                  <img
                    data-aos="fade-up"
                    data-aos-delay="800"
                    src="assets/images/hero/2.png"
                    alt="img_not_found"
                  />
                </div>

                <div class="position-absolute animate-three">
                  <img
                    data-aos="fade-down"
                    data-aos-delay="800"
                    src="assets/images/hero/3.png"
                    alt="img_not_found"
                  />
                </div>
              </div>

              <div class="hero-img-mobile">
                <img
                  src="assets/images/hero/mobile.png"
                  alt="images-not_found"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainBanner;

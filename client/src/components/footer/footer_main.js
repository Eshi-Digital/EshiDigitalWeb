import Footer from '.';
import { Link } from 'react-router-dom';

const FooterMain = () => {
  return (
    <>
      <footer className="footer-section position-relative">
        <img
          class="footer-bg-shape"
          src="assets/images/footer/shape.png"
          alt="images_notFound"
        />
        {/* <img
          className="path-shape mb-4"
          src="assets/images/footer/path-shape.png"
          alt="images_notFound"
        /> */}

        <Footer></Footer>

        <div class="copy-right-section">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <p>
                  Copyright {new Date().getFullYear()} &copy;
                  <span id="currentYear"></span>
                  <i class="icofont-heart"></i>
                  <Link to="/"> Eshi Digital</Link>
                  <br />
                  All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterMain;

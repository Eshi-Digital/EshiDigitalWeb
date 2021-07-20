import '../../assets/css/style.css';

const Footer = ()=> {
    return(
        <div className="footer-top position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="news-letter pb-100">
                            <form id="mc-form" action="#" className="news-letter-form position-relative">
                                <input id="mc-email" className="form-control" type="text" required=""
                                    placeholder="Enter Your Email Address" />
                                <button className="btn btn-warning">
                                    Subscribe Now <i className="icofont-rounded-double-right"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                        <div className="footer-card">
                            <div className="footer-row">
                                <div className="footer-col">
                                    <div className="footer-widget">
                                        <a className="footer-logo" href="index.html">
                                            <span style={{color: "white"}}>Eshi Digital</span>
                                            <img src="assets/images/logo/logo-white.png" alt="logo_not_found" />
                                        </a>

                                        <ul className="adress">
                                            <li>
                                                <span className="icon"><i className="icofont-ui-call"></i></span>
                                                <a href="tel:0123456789">(+251) 928 97 00 38</a>
                                            </li>
                                            <li>
                                                <span className="icon"><i className="icofont-send-mail"></i></span>
                                                <a href="mailto:demo@gmail.com">info@eshidigital.com</a>
                                            </li>
                                            <li>
                                                <span className="icon"><i className="icofont-google-map"></i></span>
                                                Addis Ababa, Ethiopia(ET)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-col">
                                    <div className="footer-widget">
                                        <h4 className="title">All Services</h4>
                                        <ul className="footer-menu">
                                            <li>
                                                <a className="footer-link" href="#">
                                                    <i className="icofont-rounded-double-right"></i>Social
                                                    Marketing</a>
                                            </li>
                                            <li>
                                                <a className="footer-link" href="#">
                                                    <i className="icofont-rounded-double-right"></i>SEO
                                                    Optimization</a>
                                            </li>
                                            <li>
                                                <a className="footer-link" href="#">
                                                    <i className="icofont-rounded-double-right"></i>Content
                                                    Marketing</a>
                                            </li>
                                            <li>
                                                <a className="footer-link" href="#">
                                                    <i className="icofont-rounded-double-right"></i>Social
                                                    Marketing</a>
                                            </li>
                                            <li>
                                                <a className="footer-link" href="#">
                                                    <i className="icofont-rounded-double-right"></i>Web
                                                    Analytics</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-col">
                                    <div className="footer-widget">
                                        <h4 className="title">Information</h4>
                                        <ul className="footer-menu">
                                            <li>
                                                <a className="footer-link" href="#">
                                                    <i className="icofont-rounded-double-right"></i>Vision &
                                                    Values</a>
                                            </li>
                                            <li>
                                                <a className="footer-link" href="#">
                                                    <i className="icofont-rounded-double-right"></i>Winning
                                                    Awards</a>
                                            </li>
                                            <li>
                                                <a className="footer-link" href="#">
                                                    <i className="icofont-rounded-double-right"></i>Leadership</a>
                                            </li>
                                            <li>
                                                <a className="footer-link" href="#">
                                                    <i className="icofont-rounded-double-right"></i>Sustainability</a>
                                            </li>
                                            <li>
                                                <a className="footer-link" href="#">
                                                    <i className="icofont-rounded-double-right"></i>Careers</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-col">
                                    <div className="footer-widget">
                                        <h4 className="title">Follow Us</h4>
                                        <p>
                                            Lorem Ipsum is simply dummy text the printing and
                                            typesetting.
                                        </p>
                                        <ul className="footer-social">
                                            <li className="footer-social-item">
                                                <a className="footer-social-link" href="#"><i
                                                        className="icofont-facebook"></i></a>
                                            </li>
                                            <li className="footer-social-item">
                                                <a className="footer-social-link" href="#"><i
                                                        className="icofont-twitter"></i></a>
                                            </li>
                                            <li className="footer-social-item">
                                                <a className="footer-social-link" href="#"><i className="icofont-skype"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;
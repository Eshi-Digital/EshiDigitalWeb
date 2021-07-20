import '../../assets/css/style.css';

const FAQ  = () => {
    return(
        <section className="faq-section">
        <img src="assets/images/faq/bg.png" alt="images-not_found" className="faq-bg" />
        <div className="container">
            <div className="row mb-n7">
                <div className="col-xl-6 mb-7">
                    <div className="faq-image" data-aos="zoom-in" data-aos-delay="100">
                        <img src="assets/images/faq/1.png" alt="images_not_found" />
                    </div>
                </div>
                <div className="col-xl-6 mb-7">
                    <div className="faq-content">
                        <div className="section-title primary">
                             <h5 className="sub-title">// FAQ.</h5>
                            <h3 className="title">Frequiently Asked Question.</h3>
                            <span className="hr-primary mt-4"></span>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span>1. What are the benefits of social media marketing for my company?</span>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Whether your business is taking advantage of it or not, social media has
                                            forever changed the way that consumers communicate with businesses, and vice
                                            versa. Being accessible to your customers – and your prospective clients –
                                            via social media is a vital means of developing relationships with them and
                                            helping them through the sales funnel.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span>2. Can social media marketing really help my business?</span>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Most definitely! It’s been proven again and again by business after
                                            business. In fact, not utilizing social media marketing can actually harm
                                            your business, since having an online presence on social media is simply
                                            expected of any reputable firm these days.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        <span>3. Do Small, Local Businesses Need Digital Marketing?</span>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Yes! No matter how large or small, if you have a business, you need a
                                            website. And if you need a website – and you want it to help you make money
                                            – you need marketing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFoure">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFoure" aria-expanded="false"
                                        aria-controls="collapseFoure">
                                        <span>4. When Will I See Results?</span>
                                    </button>
                                </h2>
                                <div id="collapseFoure" className="accordion-collapse collapse"
                                    aria-labelledby="headingFoure" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            There is no magical number you can set for seeing results from inbound
                                            marketing. As a general rule of thumb, in our experience, companies start
                                            hitting their goals in as little as 90 days.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFoure">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFoure" aria-expanded="false"
                                        aria-controls="collapseFoure">
                                        <span>5. Does Google Ads Really Mean Immediate Traffic?</span>
                                    </button>
                                </h2>
                                <div id="collapseFoure" className="accordion-collapse collapse"
                                    aria-labelledby="headingFoure" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Yes – you can get traffic overnight with Google Ads (formerly known as
                                            Google AdWords), a paid traffic solution that shows ads to people when they
                                            search keywords relevant to your website.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFoure">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFoure" aria-expanded="false"
                                        aria-controls="collapseFoure">
                                        <span>6. Which Elements Should I Prioritize?</span>
                                    </button>
                                </h2>
                                <div id="collapseFoure" className="accordion-collapse collapse"
                                    aria-labelledby="headingFoure" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            The first aspect to focus on is, you guessed it, your audience. You need to
                                            know who you're tailoring messaging for and how to position your brand in a
                                            way that catches and holds their attention.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFoure">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFoure" aria-expanded="false"
                                        aria-controls="collapseFoure">
                                        <span>7. What Is a Blog?</span>
                                    </button>
                                </h2>
                                <div id="collapseFoure" className="accordion-collapse collapse"
                                    aria-labelledby="headingFoure" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            A blog is the part of your website that’s constantly updated. Every time you
                                            post a piece of writing – which you might hear called a post or article – it
                                            shows up on your blog. It’s a great way to keep leads and customers up to
                                            date on the latest news.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFoure">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFoure" aria-expanded="false"
                                        aria-controls="collapseFoure">
                                        <span>8. How much is it going to cost?</span>
                                    </button>
                                </h2>
                                <div id="collapseFoure" className="accordion-collapse collapse"
                                    aria-labelledby="headingFoure" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                            Marketers who have limited experience with content marketing often worry
                                            that the cost of creating content is just too expensive for their company.
                                            The reality is that marketers often expect to pay way more than creators
                                            charge for various content assets.
                                        </p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
}
export default FAQ;
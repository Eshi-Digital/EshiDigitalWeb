const WhyChooseUsObj = [
  {
    title: 'High Customer Retention Rate',
    content:
      'Marketers who have limited experience with content marketing often worry that the cost of creating content is just too expensive for their company. The reality is that marketers often expect to pay way more than creators charge for various content assets.',
    imgPath: 'assets/images/icon/1.png',
  },
  {
    title: 'Dedicated Customer Support',
    content:
      'Lorem Ipsum is simply dummy text of the printing typesetting Ipsum has been the industrys standard dummy.',
    imgPath: 'assets/images/icon/2.png',
  },
  {
    title: 'Professional Team Member',
    content:
      'Lorem Ipsum is simply dummy text of the printing typesetting Ipsum has been the industrys standard dummy.',
    imgPath: 'assets/images/icon/3.png',
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <section class="about-section">
        <img
          src="assets/images/about/bg.png"
          alt="images-not_found"
          class="about-bg"
        />
        <div class="container px-10">
          <div class="row">
            <div class="col-lg-6">
              <div
                class="about-img-content"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <img src="assets/images/about/1.png" alt="images-not_found" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="offset-about">
                <div class="about-content section-title primary">
                  <h5 class="sub-title">Why Choose Us?</h5>
                  <h3 class="title">
                    We Are Trusted Digital Marketing Company.
                  </h3>
                  <p className="text-justify p-4">
                    Eshi is a Digital Solution provider HQ’d in Ethiopia. We are
                    in charge of driving brand awareness and lead generation
                    through all the digital channels Eshi team has perfected the
                    science of digital world with a clear focus on delivering
                    results. And not just likes and reach, we opt for actual
                    business results, the results that matter.
                  </p>
                </div>
                <div class="about-object">
                  {WhyChooseUsObj.map((whyChooseUs) => {
                    return (
                      <div class="about-object-list">
                        <div class="icon">
                          <img
                            src={whyChooseUs.imgPath}
                            alt="images-not_found"
                          />
                        </div>
                        <div class="about-object-content">
                          <h4 class="title">{whyChooseUs.title}</h4>
                          <p className="text-justify pr-4">{whyChooseUs.content}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;

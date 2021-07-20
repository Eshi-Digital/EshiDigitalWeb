const OfferCard = () => {
  return (
    <>
      <div class="col-md-6 mb-7" data-aos="fade-up" data-aos-delay="500">
        <div class="service-card">
          <img
            class="line"
            src="assets/images/service/line-one.png"
            alt="images_not_found"
          />
          <div class="service-icon">
            <div class="roted-around dagnger">
              <span></span>
            </div>
            <img src="assets/images/icon/marketing.png" alt="" />
          </div>
          <div class="service-content">
            <h4 class="title">Marketing Automation</h4>
            <p>
              Lorem Ipsum is simply dummy text of the ipsum has been the
              industry standard ever printer specimen book.
            </p>
            <a href="case-details.html" class="btn btn-outline-danger">
              Details +
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferCard;

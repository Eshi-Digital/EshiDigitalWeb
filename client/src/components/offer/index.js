const OfferCard = ({
  title,
  content,
  lineImgPath,
  circleImgPath,
  buttonOutlineClass,
}) => {
  return (
    <>
      <div class="col-md-6 mb-7" data-aos="fade-up" data-aos-delay="500">
        <div class="service-card" style={{height:'300px'}}>
          <img class="line" src={lineImgPath} alt="images_not_found" />
          <div class="service-icon">
            <div class="roted-around dagnger">
              <span></span>
            </div>
            <img src={circleImgPath} alt="" />
          </div>
          <div class="service-content">
            <h4 class="title">{title}</h4>
            <p>{content}</p>
            <a href="case-details.html" className={buttonOutlineClass}>
              Details +
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferCard;

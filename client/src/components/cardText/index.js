const CardText = ({ circleImgPath, content, textClass }) => {
  return (
    <>
      <div class="col-12" data-aos="fade-up" data-aos-delay="200">
        <div class="section-title primary text-center pb-100">
          <div class="icon">
            <img src={circleImgPath} alt="Icon_not_found" />
          </div>
          <h3 class={textClass}>{content}</h3>
          <span class="hr-secodary"></span>
        </div>
      </div>
    </>
  );
};

export default CardText;

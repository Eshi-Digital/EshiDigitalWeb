const ServiceDetails = ({ mainTitle, subTitle, content, children, svg }) => {
  return (
    <>
      <hr className="my-5" />
      <div className="service-details">
        <div className="service-details-list">
          <div className="row mb-n7">
            <div className="col-lg-6 mb-7 text-center">
              <h4 className="text-center text-dark mb-5">{subTitle}</h4>
              {/* SVG ICON */}
              {svg}
            </div>

            <div className="col-12 col-lg-6 mb-7">
              <h2 className="title">{mainTitle}</h2>
              <p className="text-justify">{content}</p>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;

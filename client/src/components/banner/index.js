const Banner = ({ bannerTitle, routePath }) => {
  return (
    <section className="bread-crumb-section">
      <img
        className="shape shape1"
        src="assets/images/bread/1.png"
        alt="images_not_found"
      />
      <img
        className="shape shape2"
        src="assets/images/bread/2.png"
        alt="images_not_found"
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="title text-center">{bannerTitle}</h2>
            <h3 className="text-center text-white">
              Here it is! All our services
            </h3>
            <nav aria-label="breadcrumb">
              <ol
                className="breadcrumb justify-content-center"
                style={{ background: 'none' }}
              >
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="mx-2 text-white">
                  <i class="fas fa-angle-double-right"></i>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <span>{routePath}</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;

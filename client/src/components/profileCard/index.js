import './style.css';

const ProfileCard = ({
  title,
  profession,
  imgPath,
  facebookLink,
  instagramLink,
  linkedinLink,
  telegramLink
}) => {
  return (
    <>
      <div
        className="col-lg-3 col-sm-6 mb-7 box-shadow"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="team-card">
          <div className="thumb">
            <img src={imgPath} alt="images_not_found" />
            <img
              className="social-hover"
              src="assets/images/team/team-hover.png"
              alt="images_not_found"
            />
            <ul className="team-social">
              <li className="team-social-item">
                <a className="team-social-link" href={facebookLink}>
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="team-social-item">
                <a className="team-social-link" href={instagramLink}>
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="team-social-item">
                <a className="team-social-link" href={linkedinLink}>
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="team-social-item">
                <a className="team-social-link" href={telegramLink}>
                  <i className="fab fa-telegram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="content">
            <h3 className="title">{title}</h3>
            <h4 className="text-white">{profession}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;

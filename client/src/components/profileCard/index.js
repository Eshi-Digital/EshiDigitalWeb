import './style.css';

const ProfileCard = ({
  title,
  profession,
  imgPath,
  linkedinLink,
  telegramLink,
  githubLink,
  twitterLink,
}) => {
  return (
    <>
      <div
        className="col-lg-4 col-sm-6 mb-7 box-shadow"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="team-card">
          <div className="thumb">
            <img src={imgPath} alt="images_not_found" />
            <img
              className="social-hover ml-lg-5"
              src="assets/images/team/team-hover.png"
              alt="images_not_found"
            />
            <ul className="team-social">
              <li className="team-social-item pb-5">
                <a className="team-social-link" href={twitterLink}>
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="team-social-item">
                <a className="team-social-link" href={githubLink}>
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="team-social-item">
                <a className="team-social-link" href={linkedinLink}>
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="team-social-item mt-2">
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

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
            <img
              src={imgPath}
              alt="images_not_found"
              style={{ width: '360px', height: '480px', 'object-fit': 'cover' }}
            />

            <div className="mt-10">
              <img
                className="social-hover ml-4 mt-10"
                src="assets/images/team/team-hover.png"
                alt="images_not_found"
                style={{ width: '240px' ,height:'240px' }}
              />

              <ul className="team-social mt-10">
                <li className="team-social-item">
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
                <li className="team-social-item pb-10">
                  <a className="team-social-link" href={telegramLink}>
                    <i className="fab fa-telegram"></i>
                  </a>
                </li>
              </ul>
            </div>
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

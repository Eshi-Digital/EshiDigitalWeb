import '../../assets/css/style.css';
import './style.css';

const SocialMedia = () => {
  return (
    <>
      <ul className="social d-flex">
        <li>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialMedia;

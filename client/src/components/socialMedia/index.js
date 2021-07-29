import '../../assets/css/style.css';
import './style.css';

const SocialMedia = () => {
  return (
    <>
      <ul className="social d-flex">
        <li>
          <a href="https://www.facebook.com/eshidigital/">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/eshidigital/">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://t.me/eshidigital">
            <i className="fab fa-telegram"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/DigitalEshi">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialMedia;

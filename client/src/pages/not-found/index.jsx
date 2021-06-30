import { Link } from "react-router-dom";
const NotFound = () => (
  <div status="404" title="404" subTitle="">
    <h2>Sorry, the page you visited does not exist.</h2>
    <button type="primary">
      <Link to="/">Back Home</Link>
    </button>
  </div>
);
export default NotFound;

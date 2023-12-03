import { Link } from "react-router-dom";
import "./error404.css";

const Error404 = () => {
  return (
    <div>
      <div className="main">
        {/* SVG y otros elementos visuales */}
      </div>
      <div className="text-center">
        <h2>It seems there was an error ☹ back to home!</h2>
        <Link to='/' className="btn-red my-4 text-decoration-none text-center">Home</Link>
      </div>
    </div>
  );
};

export default Error404;
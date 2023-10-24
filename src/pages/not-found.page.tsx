import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="text-xl text-gray-700 mb-4">Page Not Found</p>
        <Link to="/" className="text-blue-500 hover:underline">
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

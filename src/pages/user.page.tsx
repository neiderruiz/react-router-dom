import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faGlobe,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "../models/user.model";
import Api from "../helpers/api";

const UserPage = () => {
  const params = useParams<{ id: string }>();

  const [user, setUser] = useState<User>()

  useEffect(() => {
    Api.get(`/users/${params?.id}`).then((response) => {
        setUser(response)
    })
  },[params?.id])

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="p-8 border rounded-lg shadow-lg bg-gray-800 w-1/3 space-y-3">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={`https://ui-avatars.com/api/?name=${user?.name}}`}
            alt={`example user image`}
          />
          <h5 className="mb-1 text-xl font-medium ">{user?.name}</h5>
          <span className="text-sm text-gray-500">{user?.address.city}</span>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500" />
            <span>{user?.address.city}, {user?.address.street}, {user?.address.zipcode}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} className="text-gray-500" />
            <span>{user?.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faGlobe} className="text-gray-500" />
            <span>{user?.website}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faBuilding} className="text-gray-500" />
            <span>{user?.company.name}</span>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserPage;

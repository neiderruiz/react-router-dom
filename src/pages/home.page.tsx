import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Api from "../helpers/api";
import { User } from "../models/user.model";
import { Link } from "react-router-dom";
const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    Api.get("/users").then((response) => {
      setUsers(response);
    });
  }, []);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              User
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Website
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={`https://ui-avatars.com/api/?name=${user.name}`}
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">{user.name}</div>
                  <div className="font-normal text-gray-500">
                    {user.email}
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">{user.phone}</td>
              <td className="px-6 py-4">{user.website}</td>
              <td className="px-6 py-4 flex gap-2">
                <Link
                  to={`/user/${user.id}`}
                  className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <FontAwesomeIcon icon={faEye} className="p-1" />
                </Link>
                <button
                  type="button"
                  className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  <FontAwesomeIcon icon={faTrash} className="p-1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;

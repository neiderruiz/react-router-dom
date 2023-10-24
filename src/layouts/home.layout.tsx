import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
const HomeLayout = () => {
    const navigate = useNavigate()
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Router App
            </span>
          </Link>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-blue-800" : "text-white"
                    } block py-2 pl-3 pr-4 rounded`;
                  }}
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-blue-800" : "text-white"
                    } block py-2 pl-3 pr-4 rounded`;
                  }}
                  aria-current="page"
                >
                  Contact
                </NavLink>
              </li>
              <button
                onClick={() => navigate('/login')}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default HomeLayout;

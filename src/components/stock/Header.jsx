import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const logout = () => {
    localStorage.clear();
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };
  return (
    <div>
      <nav className=" bg-sky-800 text-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Advance IT
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={logout}
              className="items-center text-center bg-blue-200 border-gray-300 text-black rounded-lg shadow-md px-6 py-2 hover:bg-gray-200"
            >
              logout
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white ">
              <li className="block py-2 px-3 text-white rounded md:bg-transparent md:text-cyan-300 md:p-0 md:dark:text-blue-500">
                <Link to="/admin">Home</Link>
              </li>
              <li className="block py-2 px-3 text-white rounded md:bg-transparent md:text-cyan-300 md:p-0 md:dark:text-blue-500">
                <Link to="/admin/product">Products</Link>
              </li>
              <li className="block py-2 px-3 text-white rounded md:bg-transparent md:text-cyan-300 md:p-0 md:dark:text-blue-500">
                <Link to="/admin/sale">Sale</Link>
              </li>
              <li>
                
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

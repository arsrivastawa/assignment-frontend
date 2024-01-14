import React from "react";
import { Link } from "react-router-dom";
import '../componentsStylings/NavBar.css'

function LoginRegisterCombo() {
  return (
    <>
      <div className="LoginRegisterCombo-container lg:flex flex-row gap-2 sm:gap-4 justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/login"
            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs md:text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Log in
          </Link>
          <Link
            to="signup"
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xs md:text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginRegisterCombo;

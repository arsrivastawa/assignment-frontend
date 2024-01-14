import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "../assets/groovio.png";
import { HamBurgerButton } from "./Buttons";
import { Link } from "react-router-dom";
import LoginRegisterCombo from "./LoginRegisterCombo";
import "../componentsStylings/NavBar.css";

function Navbar() {
  function handleToggle() {}
  // document.body.style.overflow = "hidden";
  return (
    <header>
      <nav class="bg-primary-50 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 over">
        <div class="flex relative justify-between items-center w-full">
          <Link to="/" class="flex items-center">
            <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Groovio
            </span>
          </Link>
          <div
            class="ham-burger-menu justify-between bg-primary-50 dark:bg-gray-800 p-4 items-center flex w-auto"
            id="mobile-menu-2"
          >
            <ul class="flex rounded-md w-full bg-primary-50 dark:bg-gray-800 font-medium flex-row">
              <Link
                to={""}
                class="block py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
              >
                <li>Home</li>
              </Link>
              <Link
                to={""}
                class="block py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
              >
                <li>Company</li>
              </Link>
              <Link
                to={""}
                class="block py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
              >
                <li>Marketplace</li>
              </Link>
              <Link
                to={""}
                class="block py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
              >
                <li>Features</li>
              </Link>
              <Link
                to={""}
                class="block py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
              >
                <li>Team</li>
              </Link>
              <Link
                to={""}
                class="block py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
              >
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div class="flex items-center">
            <ThemeSwitcher />
            <LoginRegisterCombo />
            <HamBurgerButton />
          </div>
          {/* <div className="sidebar-container p-1 w-full absolute -right-[40%] top-full z-10 h-screen bg-primary-50 dark:bg-gray-800">
            <ul class="flex rounded-md w-1/2 bg-primary-50 dark:bg-gray-800 font-medium flex-col gap-1">
              <Link
                to={""}
                class="block py-2 px-4 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
              >
                <li>Home</li>
              </Link>
              <Link
                to={""}
                class="block py-2 px-4 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
              >
                <li>Company</li>
              </Link>
              <Link
                to={""}
                class="block py-2 px-4 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
              >
                <li>Marketplace</li>
              </Link>
              <Link
                to={""}
                class="block py-2 px-4 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
              >
                <li>Features</li>
              </Link>
              <Link
                to={""}
                class="block py-2 px-4 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
              >
                <li>Team</li>
              </Link>
              <Link
                to={""}
                class="block py-2 px-4 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
              >
                <li>Contact</li>
              </Link>
            </ul>
            <div className="flex flex-row gap-2 sm:gap-4 justify-between items-center">
              <div className="flex items-center lg:order-2">
                <Link
                  to="/login"
                  className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Log in
                </Link>
                <Link
                  to="signup"
                  className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

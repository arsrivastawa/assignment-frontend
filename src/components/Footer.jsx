import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/groovio.png";

function Footer() {
  return (
    <>
      <footer class="text-gray-600 bg-primary-50 dark:bg-gray-800 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            to={"/"}
            class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <img src={Logo} class=" h-6 sm:h-9" alt="Groovio_Logo" />
            <span class="ml-3 text-xl dark:text-white">Groovio</span>
          </Link>
          <p class="text-sm text-gray-500 dark:text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Groovio —
            <span class="text-gray-600 ml-1 dark:text-gray-500">
              Aditya Ranjan
            </span>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="cursor-pointer hover:text-gray-700 dark:hover:text-gray-400 text-gray-500">
              <i class="bi bi-instagram"></i>
            </a>
            <a class="cursor-pointer hover:text-gray-700 dark:hover:text-gray-400 ml-3 text-gray-500">
              <i class="bi bi-facebook"></i>
            </a>
            <a class="cursor-pointer hover:text-gray-700 dark:hover:text-gray-400 ml-3 text-gray-500">
              <i class="bi bi-twitter-x"></i>
            </a>
            <a class="cursor-pointer hover:text-gray-700 dark:hover:text-gray-400 ml-3 text-gray-500">
              <i class="bi bi-linkedin"></i>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;

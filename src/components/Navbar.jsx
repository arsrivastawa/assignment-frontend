import React, { useContext, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "../assets/groovio.png";
import { Link } from "react-router-dom";
import LoginRegisterCombo from "./LoginRegisterCombo";
import "../componentsStylings/NavBar.css";
import Avatar from "./Avatar";
import { DataContext } from "../helperFunctions/DataProvider";
import axios from "axios";

function Navbar({ userName }) {
  const Product = useContext(DataContext);
  const [visible, setVisible] = useState(false);
  const [keyword, setKeyword] = useState("");

  function fltr(Category) {
    Product.setProductDataForManipulation(Product.productData);
    if (Category == "All") {
      return;
    }
    Product.setProductDataForManipulation((data) =>
      Product.productDataForManipulation.filter(
        (val) => val.category == Category
      )
    );
  }

  function handleSearch() {
    axios
      .post("https://alive-ox-necklace.cyclic.appapi/v2/search", { keyword })
      .then((res) => Product.setProductDataForManipulation(res.data.result));
  }

  function toggleVisibile() {
    if (visible) {
      document
        .querySelector(".category-dropdown-content")
        .classList.replace("opacity-100", "opacity-0");
      setTimeout(() => {
        document
          .querySelector(".category-dropdown-content")
          .classList.add("hidden");
      }, 200);
    } else {
      document
        .querySelector(".category-dropdown-content")
        .classList.replace("opacity-0", "opacity-100");
      setTimeout(() => {
        document
          .querySelector(".category-dropdown-content")
          .classList.remove("hidden");
      }, 200);
    }
    setVisible(!visible);
  }

  return (
    <header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" class="flex items-center">
            <img src={Logo} class="mr-3 h-6 sm:h-9" alt="Groovio Logo" />
            <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </Link>
          <div class="flex items-center sm:order-2">
            <ThemeSwitcher />
            {userName ? <Avatar userName={userName} /> : <LoginRegisterCombo />}
          </div>
          <div
            class="justify-between items-center w-full sm:flex sm:w-auto sm:order-1"
            id="mobile-menu-2"
          >
            <div class="flex mt-4 font-medium flex-row justify-center sm:mt-0">
              <div className="flex px-2 flex-row w-full items-stretch justify-between">
                <div className=" w-fit flex flex-row items-stretch">
                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      setKeyword(e.target.value);
                    }}
                    placeholder="Search item"
                    type="text"
                    class="pr-4 pl-3 md:text-sm text-xs outline-none text-primary-950 dark:text-primary-50 bg-transparent border-b-[1px] dark:border-b-primary-50 border-b-primary-950"
                  />
                  <button
                    onClick={handleSearch}
                    to="signup"
                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-r-lg text-xs px-3 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                  >
                    Search
                  </button>
                </div>
                <div className="flex items-center sm:px-1 cursor-pointer">
                  <div className="relative">
                    <div
                      className="avatar-img-container p-1"
                      onClick={toggleVisibile}
                      tabIndex="0"
                      role="button"
                    >
                      <i class="bi bi-funnel-fill text-primary-950 dark:text-primary-50"></i>
                    </div>
                    <ul
                      tabIndex="0"
                      className="category-dropdown-content absolute duration-200 opacity-0 bg-white text-primary-950 dark:bg-gray-900 z-[1] mt-1 right-0 menu p-2 shadow bg-base-100 rounded-lg w-40"
                    >
                      <li className="mb-2 font-semibold bg-transparent dark:text-primary-50 px-4 py-1 text-center">
                        <a className="bg-neutral">Categories</a>
                      </li>
                      <li
                        onClick={() => fltr("All")}
                        className="mb-2 font-semibold bg-primary-50 dark:bg-gray-800 dark:text-primary-50 dark:hover:bg-gray-700 hover:bg-primary-100 px-4 py-2 rounded-md"
                      >
                        <a className="bg-neutral">All Categories</a>
                      </li>
                      <li
                        onClick={() => fltr("Fashion")}
                        className="mb-2 font-semibold bg-primary-50 dark:bg-gray-800 dark:text-primary-50 dark:hover:bg-gray-700 hover:bg-primary-100 px-4 py-2 rounded-md"
                      >
                        <a className="bg-neutral">Fashion</a>
                      </li>
                      <li
                        onClick={() => fltr("Mobile")}
                        className="mb-2 font-semibold bg-primary-50 dark:bg-gray-800 dark:text-primary-50 dark:hover:bg-gray-700 hover:bg-primary-100 px-4 py-2 rounded-md"
                      >
                        <a className="bg-neutral">Mobiles</a>
                      </li>
                      <li
                        onClick={() => fltr("Electronics")}
                        className="mb-2 font-semibold bg-primary-50 dark:bg-gray-800 dark:text-primary-50 dark:hover:bg-gray-700 hover:bg-primary-100 px-4 py-2 rounded-md"
                      >
                        <a className="bg-neutral">Electronics</a>
                      </li>
                      <li
                        onClick={() => fltr("Grocery")}
                        className="mb-2 font-semibold bg-primary-50 dark:bg-gray-800 dark:text-primary-50 dark:hover:bg-gray-700 hover:bg-primary-100 px-4 py-2 rounded-md"
                      >
                        <a className="bg-neutral">Grocery</a>
                      </li>
                      <li
                        onClick={() => fltr("Medicines")}
                        className="font-semibold bg-primary-50 dark:bg-gray-800 dark:text-primary-50 dark:hover:bg-gray-700 hover:bg-primary-100 px-4 py-2 rounded-md"
                      >
                        <span className="bg-neutral text-center">
                          Medicines
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

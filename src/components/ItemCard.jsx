import React, { useContext } from "react";
import { DataContext } from "../helperFunctions/DataProvider";
import { Link } from "react-router-dom";

function ItemCard({ ImgSrc, ItemName, Category, ItemPrice }) {
  function CartButton() {
    return (
      <>
        <div className="px-2 rounded dark:hover:bg-gray-900 hover:bg-gray-200">
          <i className="bi bi-cart2"></i>
        </div>
      </>
    );
  }
  function LogInButton() {
    return (
      <Link
        to="/login"
        className="text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-xs md:text-sm px-4 py-2 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none"
      >
        Log In to Buy
      </Link>
    );
  }
  const User = useContext(DataContext);

  return (
    <>
      <div class="w-full hover:cursor-pointer duration-150 dark:bg-gray-800 dark:shadow-gray-800 hover:shadow-md rounded-md hover:scale-[1.02] aspect-square">
        <a class="flex justify-center items-center relative h-48 overflow-hidden rounded-md">
          <img
            alt={`${ItemName}_Img`}
            class="object-contain object-center h-full aspect-square block duration-150"
            src={ImgSrc}
          />
        </a>
        <div class="p-3">
          <h3 class="text-gray-500 dark:text-gray-300 text-xs tracking-widest uppercase title-font mb-1">
            in {Category}
          </h3>
          <h2 class="text-primary-950 dark:text-primary-50 title-font text-lg font-medium">
            {ItemName}
          </h2>
          <p class="text-gray-600 flex flex-row justify-between dark:text-gray-400 mt-1">
            {User.userData.name ? "Rs. " + ItemPrice : <LogInButton />}
            {User.userData.name ? <CartButton /> : null}
          </p>
        </div>
      </div>
    </>
  );
}

export default ItemCard;

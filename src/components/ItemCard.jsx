import React from "react";

function ItemCard({ ImgSrc, ItemName, Category, ItemPrice }) {
  return (
    <>
      <div class="w-full hover:cursor-pointer duration-150 dark:bg-gray-800 dark:shadow-gray-800 hover:shadow-md rounded-md group aspect-square">
        <a class="block relative h-48 overflow-hidden rounded-md">
          <img
            alt={`${ItemName}_Img`}
            class="object-cover object-center w-full aspect-square block group-hover:scale-105 duration-150"
            src={ImgSrc}
          />
        </a>
        <div class="p-3">
          <h3 class="text-gray-500 dark:text-gray-300 text-xs tracking-widest uppercase title-font mb-1">
            {Category}
          </h3>
          <h2 class="text-primary-950 dark:text-primary-50 title-font text-lg font-medium">
            {ItemName}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mt-1">Rs. {ItemPrice}</p>
        </div>
      </div>
    </>
  );
}

export default ItemCard;

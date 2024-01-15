import React, { useContext } from "react";
import axios from "axios";
import ItemCard from "../components/ItemCard";
import { useEffect } from "react";
import { DataContext } from "../helperFunctions/DataProvider";

function ProductPage() {
  const Products = useContext(DataContext);
  useEffect(() => {
    axios.get("https://alive-ox-necklace.cyclic.app/api/v2/products").then((res) => {
      Products.setProduct(res.data.result);
      Products.setProductDataForManipulation(res.data.result);
      // console.log(Products.productData);
    });
  }, []);
  return (
    <>
      <section class="text-gray-600 dark:bg-gray-900">
        <div class="w-full py-24 px-4 grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-4 touch">
          {Products.productDataForManipulation.map((e) => (
            <ItemCard
              ImgSrc={e.image.url}
              ItemName={e.name}
              Category={e.category}
              ItemPrice={e.price}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductPage;

import React from "react";
import Button from "../components/Buttons";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <section class="bg-white h-screen dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Page Not Found
            </p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Uh-oh! Got lost in the online store. Head back to the main page
              for awesome deals!{" "}
            </p>
            <Link to={"/"}>
              <Button title={"Back to HomePage"} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ErrorPage;
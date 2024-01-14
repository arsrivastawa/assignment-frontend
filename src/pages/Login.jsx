import React, { useState } from "react";
import Logo from "../assets/groovio.png";
import Input from "../components/InputBox";
import Button from "../components/Buttons";
import { Link, useLocation } from "react-router-dom";
import Alert from "../components/Alert";

function Login() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [msgToggler, setMsgToggler] = useState(false);
  const [msg, setMsg] = useState("");
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div
          /* key={useLocation().pathname}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.1, ease: "linear" }} */
          className="flex flex-col items-center justify-center px-6 py-6 mx-auto h-screen lg:py-0"
        >
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
            Groovio
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <div className="space-y-4 md:space-y-6">
                <Input
                  type="email"
                  id={"email"}
                  label={"Email"}
                  placeholder={"Enter your email"}
                  setter={setEmail}
                />
                <Input
                  type="password"
                  id={"password"}
                  label={"Password"}
                  placeholder={"Enter your password"}
                  setter={setPassword}
                />

                <Alert messageToggler={msgToggler} message={msg} />
                <div className="flex w-full justify-center items-center">
                  <Button
                    title={"Log In"}
                    onClick={(e) => {
                      e.preventDefault;
                      alert("Hello There");
                    }}
                  />
                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;

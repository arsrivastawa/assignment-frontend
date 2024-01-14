import React, { useState } from "react";
import Logo from "../assets/groovio.png";
import { Link, useLocation } from "react-router-dom";
import Input from "../components/InputBox";
import Button from "../components/Buttons";
import Alert from "../components/Alert";

function Signup() {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [uID, setUID] = useState("");
  const [Password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
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
          className="flex flex-col items-center justify-center px-6 py-10 mx-auto min-h-screen"
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
                Create new account
              </h1>
              <div className="space-y-4 md:space-y-6">
                <Input
                  id={"name"}
                  label={"Name"}
                  placeholder={"Enter Your Name"}
                  setter={setUname}
                />
                <Input
                  type="email"
                  id={"email"}
                  label={"Email"}
                  placeholder={"Enter your email"}
                  setter={setEmail}
                />
                <Input
                  id={"uid"}
                  label={"UserID"}
                  placeholder={"It should be unique"}
                  setter={setUID}
                />
                <Input
                  type="password"
                  id={"password"}
                  label={"Password"}
                  placeholder={"Enter your password"}
                  setter={setPassword}
                />
                <Input
                  type="password"
                  id={"cnfPassword"}
                  label={"Confirm Password"}
                  placeholder={"Re enter your password"}
                  setter={setCnfPassword}
                />
                <Alert messageToggler={msgToggler} message={msg} />
                <div className="flex w-full justify-center items-center">
                  <Button
                    title={"Sign Up"}
                    onClick={(e) => {
                      e.preventDefault();
                      alert("msgToggler");
                    }}
                  />
                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
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

export default Signup;

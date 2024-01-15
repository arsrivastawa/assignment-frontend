import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { useContext, useEffect } from "react";
import ErrorPage from "./pages/404";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { DataContext } from "./helperFunctions/DataProvider";
import axios from "axios";

function App() {
  const User = useContext(DataContext);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    let token = localStorage.getItem("token");
    if (token) {
      axios
        .post("https://alive-ox-necklace.cyclic.app/api/v1/user", { token })
        .then((res) => {
          User.setUser(res.data);
          console.log(res.data);
        })
        .catch((err) => {});
    }
  }, []);
  return (
    <>
      <Router>
        <Navbar userName={User.userData.name} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

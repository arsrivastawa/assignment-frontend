import axios from "axios";
export default function handleLogin(
  email,
  password,
  setMessage,
  setMessageToggler,
  navigate,
  setUser
) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email)) {
    setMessageToggler(true);
    setMessage("Enter a Valid email Address");
    setTimeout(() => {
      setMessageToggler(false);
      setMessage("");
    }, 2000);
  } else if (email != "" && password != "") {
    axios
      .post(
        "http://localhost:3000/api/v1/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "TokenNotExisting",
          },
        }
      )
      .then((res) => {
        if (res.data.state == "verified") {
          setMessageToggler(true);
          setMessage("Log in Success");
          localStorage.setItem("token", res.data.token);
          setUser(res.data.userData);
          navigate("/");
        } else if (res.data.state == "doesNotExist") {
          setMessageToggler(true);
          setMessage("Email doesn't exist in our record, plese register");
        } else {
          setMessageToggler(true);
          setMessage("Wrong Password");
        }
      })
      .catch((err) => {
        setMessageToggler(true);
        setMessage("Error While Sending the Data");
      })
      .finally(() => {
        setTimeout(() => {
          setMessageToggler(false);
          setMessage("");
        }, 2000);
      });
  } else {
    setMessage("Fill All the Fields");
  }
}

export function handleSignup(
  name,
  email,
  password,
  cnfPassword,
  setMessage,
  setMessageToggler,
  navigate,
  setUser
) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email)) {
    setMessageToggler(true);
    setMessage("Enter valid Email Address");
    setTimeout(() => {
      setMessageToggler(false);
      setMessage("");
    }, 2000);
  } else if (email != "" && password != "" && cnfPassword != "" && name != "") {
    if (password == cnfPassword) {
      axios
        .post("http://localhost:3000/api/v1/create", {
          name,
          email,
          password,
        })
        .then((res) => {
          if (res.data.state == "created") {
            setMessageToggler(true);
            setMessage("Signup Success");
            navigate("/login");
          } else {
            setMessageToggler(true);
            setMessage("Email already exists, please login");
          }
        })
        .catch((err) => {
          setMessageToggler(true);
          setMessage("Client error - can't connet to the server");
          console.log(err);
        })
        .finally(() => {
          setTimeout(() => {
            setMessageToggler(false);
            setMessage("");
          }, 2000);
        });
    } else {
      setMessageToggler(true);
      setMessage("Password in both the fields should be same");
      setTimeout(() => {
        setMessageToggler(false);
        setMessage("");
      }, 2000);
    }
  } else {
    setMessage("Enter All Fields");
  }
}

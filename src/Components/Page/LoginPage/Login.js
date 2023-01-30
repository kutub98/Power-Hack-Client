import React, { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
// import 'sweetalert2/src/sweetalert2.scss'
import { Link, Navigate, useNavigate } from "react-router-dom";
import Loading from "../../Hooks/Loading";
import useToken from "../../Hooks/userToken";
import "./Login.css";
const Login = () => {
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(true);
  const [PasswordError, setPasswordError] = useState("");
  const [creteUserEmail, setCreateUserEmail] = useState("");
  const navigate = useNavigate();
  const [token] = useToken(creteUserEmail);

  if (token) {
    navigate("/billingPage");
  }
  //login handle
  const loginHandle = (e) => {
    setLoading(false);
    e.preventDefault();
    const form = e.target;
    const email = form.Email.value;
    const Password = form.password.value;
    console.log(email, Password);

    const user = {
      email: email,
      password: Password,
    };

    fetch("https://power-hack-server-woad.vercel.app/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((data) => data.json())
      .then((res) => {
        setCreateUserEmail(email);
        navigate("/billingPage");
        if (res.successMessage) {
          setLoading(true);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          setLoading(true);
          console.log(res);
          setEmailError(res.emailMessage);
          setPasswordError(res.passwordMessage);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // REMOVE ERROR WHEN KEY UP
  const removeERROR = () => {
    setEmailError("");
    setPasswordError("");
  };
  const removeERRoR = () => {
    setEmailError("");
    setPasswordError("");
  };

  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 login text-white">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          noValidate=""
          onSubmit={loginHandle}
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid text-white"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="Email" className="block dark:text-gray-400">
              Email
            </label>
            <input
              required
              type="text"
              onKeyUp={removeERROR}
              name="Email"
              id="Email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
            <p className="text-red-700">{emailError}</p>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              onKeyUp={removeERRoR}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
            <p className="text-red-700">{PasswordError}</p>
            <div className="flex justify-end text-xs dark:text-gray-400">
              <p className="cursor-pointer">Forgot Password?</p>
            </div>
          </div>
          {loading ? (
            <button className="block bg-blue-600 rounded-md w-full p-3 text-center  dark:text-gray-900 dark:bg-violet-400">
              Sign in
            </button>
          ) : (
            <button>
              <Loading></Loading>Wait a minute
            </button>
          )}
        </form>

        <p className="text-xs  cursor-pointer text-center sm:px-6 dark:text-gray-400">
          Don't have an account?
          <Link to="/register" className="underline  cursor-pointer  dark:text-gray-100">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

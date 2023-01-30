import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Hooks/Loading";
import useToken from "../../Hooks/userToken";

import "./Register.css";
const Register = () => {
  const [numberError, setNumberError] = useState();
  const [passwordError, setPasswordError] = useState("");
  const [passwordLengthError, setPasswordLengthError] = useState("");
  const [EmailAlreadyUsed, setEmailAlreadyUsed] = useState("");
  const [creteUserEmail, setCreateUserEmail] = useState("");
  const [token] = useToken(creteUserEmail);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  if (token) {
    navigate("/home");
  }
  console.log(token);

  const registerHandle = (e) => {
    e.preventDefault();
    setLoading(false);
    const form = e.target;
    const name = form.Name.value;
    const email = form.Email.value;
    const MobileNumber = form.MobileNumber.value;
    const Password = form.password.value;
    const ConfirmPassword = form.ConfirmPassword.value;

    // mobileNumber validation
    if (MobileNumber.length !== 11) {
      setNumberError("Provide valid number");
      return;
    } else {
      console.log("good number");
    }

    // password matching
    if (Password !== ConfirmPassword) {
      setPasswordError("Password not matched");
      return;
    } else if (Password.length < 6) {
      setPasswordLengthError("At least need 6 character");
    } else {
      console.log("valid password");
    }

    // userDetails
    const user = {
      name: name,
      email: email,
      MobileNumber: MobileNumber,
      password: ConfirmPassword,
    };

    fetch("https://power-hack-server-woad.vercel.app/registration", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        if (res.acknowledged) {
          console.log(email);
          console.log(setCreateUserEmail(email));
          setLoading(true);
          // navigate('/home')
        } else if (res) {
          setLoading(true);
          setEmailAlreadyUsed(res.error);
        }
      })
      .catch((error) => {
        console.log(error);
        setEmailAlreadyUsed(error);
      });

    console.log(
      "name",
      name,
      "email",
      email,
      "mobeile number",
      MobileNumber,
      "password",
      Password,
      "confirm password",
      ConfirmPassword
    );
    console.log(MobileNumber.length);
  };

  // remove setPasswordError when keyup
  const removePassError = () => {
    setPasswordError("");
    setPasswordLengthError("");
  };
  // remove setNumberError when keyup
  const removeNumberError = () => {
    setNumberError("");
  };
  const removeEmailError = () => {
    setEmailAlreadyUsed("");
  };

  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 rounded dark:bg-gray-900 dark:text-gray-100 register text-black">
        <h1 className="text-2xl font-bold text-center">Create Account</h1>
        <form
          onSubmit={registerHandle}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid text-white"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="Name" className="block dark:text-gray-400">
              Name
            </label>
            <input
              required
              type="text"
              name="Name"
              id="Name"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="Email" className="block dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="Email"
              id="Email"
              onKeyUp={removeEmailError}
              required
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <p className="text-red-500">{EmailAlreadyUsed}</p>
          <div className="space-y-1 text-sm">
            <label htmlFor="Mobile Number" className="block dark:text-gray-400">
              Mobile Number
            </label>
            <div className="flex items-center">
              <p className="p-3 defaultNumber rounded text-black bg-gra-200">+88</p>
              <input
                required
                type="number"
                name="MobileNumber"
                id="Mobile Number"
                onKeyUp={removeNumberError}
                placeholder="Mobile Number"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 mobile"
              />
            </div>
            <p className="text-red-500">{numberError}</p>
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
              onKeyUp={removePassError}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <p className="text-red-500">{passwordError}</p>
          <p className="text-red-500">{passwordLengthError}</p>
          <div className="space-y-1 text-sm">
            <label htmlFor="Confirm Password" className="block dark:text-gray-400">
              Confirm Password
            </label>
            <input
              required
              type="password"
              name="ConfirmPassword"
              id="Confirm Password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <p className="text-red-500">{passwordError}</p>
          {loading ? (
            <button
              type="submit"
              className="block bg-blue-500 rounded-md w-full p-3 text-center  dark:text-gray-900 dark:bg-violet-400"
            >
              Sign in
            </button>
          ) : (
            <button className="block bg-blue-500 rounded-md w-full p-3 text-center  dark:text-gray-900 dark:bg-violet-400">
              <Loading></Loading> Creating Account
            </button>
          )}
        </form>

        <p className="text-xs  cursor-pointer text-center sm:px-6 dark:text-gray-400">
          already have an account?
          <Link to="/home" className="underline  cursor-pointer  dark:text-gray-100">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

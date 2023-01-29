import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 rounded dark:bg-gray-900 dark:text-gray-100 register text-black">
        <h1 className="text-2xl font-bold text-center">Create Account</h1>
        <form noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid text-white">
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
              required
              type="email"
              name="Email"
              id="Email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="Mobile Number" className="block dark:text-gray-400">
              Mobile Number
            </label>
            <input
              required
              type="number"
              name="Mobile Number"
              id="Mobile Number"
              placeholder="Mobile Number"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
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
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="Confirm Password" className="block dark:text-gray-400">
              Confirm Password
            </label>
            <input
              required
              type="password"
              name="Confirm Password"
              id="Confirm Password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <button className="block bg-blue-500 rounded-md w-full p-3 text-center  dark:text-gray-900 dark:bg-violet-400">
            Sign in
          </button>
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

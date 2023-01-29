import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 login text-white">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid text-white">
          <div className="space-y-1 text-sm">
            <label htmlFor="Email" className="block dark:text-gray-400">
              Email
            </label>
            <input
              required
              type="text"
              name="Email"
              id="Email"
              placeholder="Email"
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
            <div className="flex justify-end text-xs dark:text-gray-400">
              <p className="cursor-pointer">Forgot Password?</p>
            </div>
          </div>
          <button className="block bg-blue-600 rounded-md w-full p-3 text-center  dark:text-gray-900 dark:bg-violet-400">
            Sign in
          </button>
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

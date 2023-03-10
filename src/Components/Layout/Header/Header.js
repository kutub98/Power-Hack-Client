import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  const getToken = localStorage.getItem('AccessToken')
  return (
    
      <header className=" px-[10%] py-4 w-full dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex">
            <Link to="home" aria-label="Back to homepage" className="flex items-center p-2">
              Power Hack
            </Link>
          </div>

          <ul className="  items-center space-x-3 lg:flex">
           
           { getToken ? <Link to="Register" className="bg-white text-black rounded-sm py-2 px-3" >Register</Link> : <button className="bg-white text-black rounded-sm py-2 px-3" to="Register">Logout</button>

           }
            
            
          </ul>
        </div>
      </header>
  );
};

export default Header;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const clickfun = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };
  return (
    <>
      <div className="lg:mx-14 md:mx-4  pt-12" id="home">
        <div className="p-7  w-full">
          <div className="flex text-white px-5 justify-between">
            <p className="text-3xl font-extrabold">Pranay Badgujar</p>
            <div className="w-1/2 md:block hidden">
              <ul className="flex  justify-center gap-16 cursor-pointer text-2xl">
                <li >
                  <a href="#Home" className="hover:text-red-500">Home</a>
                </li>
                <li>
                  <a href="#Projects" className="hover:text-red-500">Projects</a>
                </li>
                <li>
                  <a href="#Myskills" className="hover:text-red-500">Myskills</a>
                </li>
                <li>
                  <a href="#Contact" className="hover:text-red-500">Contact</a>
                </li>
              </ul>
            </div>

            <button
              onClick={clickfun}
              className="b absolute z-10 right-5 md:hidden"
            >
              {showMenu ? (
                <>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 100 80" width="24" height="24" fill="white">
                    <rect width="100" height="20" rx="10"></rect>
                    <rect y="30" width="100" height="20" rx="10"></rect>
                    <rect y="60" width="100" height="20" rx="10"></rect>
                  </svg>
                </>
              )}
            </button>

            {showMenu ? (
              <>
                <div className=" md:hidden block absolute bg-black w-3/4 border-2 rounded-md py-10 px-12">
                  <ul className="flex flex-col  justify-center gap-16 cursor-pointer text-2xl">
                    <li >
                      <a href="#Home" >Home</a>
                    </li>
                    <li>
                      <a href="#Projects">Projects</a>
                    </li>
                    <li>
                      <a href="#Myskills">Myskills</a>
                    </li>
                    <li>
                      <a href="#Contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;



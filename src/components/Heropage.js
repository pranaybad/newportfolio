import React from "react";
import Typewriter from "typewriter-effect";

const Heropage = () => {
  return (
    <>
      <div>
        <p className="text-6xl text-white font-semibold container mx-auto my-32 text-center leading-tight md:block hidden">
          "Discover{" "}
          <span className="text-[#d82828] font-extrabold ">
            Pranay Badgujar
          </span>{" "}
          digital realm: passion, pixels, creativity. Explore, engage,
          innovate."
        </p>
      </div>
      <div className="lg:mx-14 md:mx-4">
        <div className="flex flex-col lg:flex-row  text-white w-full p-10">
          <div className="w-full lg:w-1/2">
            <div className=" flex flex-col justify-center  items-center h-full lg:w-3/4 mx-auto">
              <div className="w-full">
                <p className="uppercase text-4xl md:text-7xl leading-tight text-center md:text-left font-extrabold">
                  <span className="text-[#d82828]">Full-stack </span>
                  web developer
                </p>
                <p className="uppercase text-3xl md:text-6xl leading-tight text-center md:text-left font-bold">
                  <span className="text-[#d82828]">
                    <Typewriter
                      options={{
                        strings: [
                          "Pranay badgujar",
                          "I'm a full-stack",
                          "web developer",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  
                  </span>
                </p>
                {/* <div className="mt-4 md:border-l-2 border-[#d82828] md:pl-10  md:w-1/2">
                  <p className=" md:text-4xl text-2xl leading-tight text-center md:text-left capitalize">
                    I'm a full-stack <br />{" "}
                    <span className="underline-offset-8 text-[#d82828] ">
                      web developer
                    </span>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pt-10 lg:pt-0">
            <div className="h-[50%]">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="coding"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heropage;

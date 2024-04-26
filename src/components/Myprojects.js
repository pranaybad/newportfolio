import React from "react";
const Myprojects = () => {
  return (
    <>
      <div className="lg:mx-14 md:mx-4 py-20" id="Projects">
        <p className="  text-white text-4xl lg:text-9xl flex justify-center mb-16 font-extrabold">
        My <span className="text-[#d82828]">Projects</span> 
        </p>

        <div className="flex lg:flex-row flex-col text-white w-full lg:mx-10 p-5 relative lg:py-20 py-8">
          <div className="w-full  hover:rotate-0">
            <a target="_blank" href="https://pranaybad.github.io/tic-tac-toe/">
              <img
                src="https://user-images.githubusercontent.com/74052369/127850024-2acd15bf-01e9-4447-8226-e42c4525acdc.png"
                alt=""
              />
            </a>
          </div>

          <div className="w-full  my-auto  hover:rotate-0">
            <div className=" text-white lg:absolute text-center mx-20 top-1/2">
              <p className="text-4xl lg:text-7xl font-extrabold  ">
                Tic Tac Toe Game
              </p>
              <p className="text-4xl lg:text-5xl font-thin">2022</p>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col-reverse lg:flex-row  text-white w-full lg:mx-10 p-5 relative lg:py-20 py-8">
          <div className="w-full  my-auto  hover:rotate-0">
            <div className=" text-white lg:absolute text-center  top-1/2">
              <p className="text-4xl lg:text-7xl font-extrabold  ">
                Navtej Ecom Front-End
              </p>
              <p className="text-4xl lg:text-5xl font-thin">2022</p>
            </div>
          </div>
          <div className="w-full  hover:rotate-0">
            <a target="_blank" href="https://pranaybad.github.io/navtej/">
              <img
                //   src="navtej.png"
                src="projects/navtej.png"
                alt=""
              />
            </a>
          </div>
        </div>

        {/*  */}

        <div className="flex lg:flex-row flex-col text-white w-full lg:mx-10 p-5 relative lg:py-20 py-8">
          <div className="w-full  hover:rotate-0">
            <a target="_blank" href="https://github.com/pranaybad/real-easted">
              <img
                src="https://user-images.githubusercontent.com/74052369/144706126-6621d5cf-51f5-4775-91a3-e9c582f7f125.png"
                alt=""
              />
            </a>
          </div>

          <div className="w-full  my-auto   hover:rotate-0">
            <div className=" text-white lg:absolute text-center mx-20 top-1/2">
              <p className="text-4xl lg:text-7xl font-extrabold  ">
                Real Easted
              </p>
              <p className="text-4xl lg:text-5xl font-thin">2022</p>
            </div>
          </div>
        </div>

        <div className="text-white  w-full flex justify-center lg:py-20 py-8">
          <p className=" text-3xl lg:text-5xl font-extrabold hover:text-white text-gray-500">
            <a href="https://github.com/pranaybad" target="_blank">
              See more projects ...
            </a>
          </p>
        
        </div>
      </div>
    </>
  );
};

export default Myprojects;

import React from "react";


const About = () => {
  return (
    <>
      <div className="lg:mx-14 md:mx-4 relative py-20">
        <p className=" lg:absolute text-white text-4xl justify-center flex lg:text-9xl lg:left-1/3 font-extrabold">
          <span className="text-[#d82828]">About</span> Me
        </p>
        <div className="flex flex-col lg:flex-row gap-10 text-white w-full p-10 ">
          <div className="w-full lg:w-1/2 ">
            <div className=" ">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="coding"
                className="rounded-full "
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 pt-10 lg:pt-0">
            <p className="text-xl lg:pt-36">
              Welcome to my portfolio! I'm{" "}
              <span className="font-bold text-[#d82828]">Pranay Badgujar</span>,
              a seasoned web developer with over 2 years of hands-on experience.
              Specializing in technologies like React.js, Next.js, MySQL,
              Python, and Express.js, I thrive in both front-end and back-end
              development. My passion lies in crafting seamless digital
              experiences and bringing ideas to life through code. Let's build
              something amazing together.
            </p>
            <div className=" flex justify-center">
              <button className="bg-[#d82828] p-4 mt-10 text-2xl rounded-lg">
                <a href="#Contact">Contact</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

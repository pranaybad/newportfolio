import React from "react";
import Navbar from "./components/Navbar";
import Heropage from "./components/Heropage";
import About from "./components/About";
import Myskil from "./components/Myskil";
import Myprojects from "./components/Myprojects";
import Followme from "./components/Followme";
import Contactme from "./components/Contactme";

const App = () => {
  return (
    <>
      <div className="bg-black ">
      {/* <div className="bg-gradient-to-r from-black via-blue-500 to-black"> */}
      {/* <div className="bg-gradient-to-r from-gray-100 via-blue-500 to-pink-500"> */}
      
        <Navbar />
        <Heropage/>
        <About/>
        <Myskil/>
        <Myprojects/>
        <Followme/>
        <Contactme/>
      </div>
    </>
  );
};

export default App;

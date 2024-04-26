import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';


const icons = [
  {
    name: "instagram",
    icon: <FontAwesomeIcon icon={faInstagram} />,
    url: "https://www.instagram.com/pranay.pb.33/",
  },
  {
    name: "GitHub",
    icon: <FontAwesomeIcon icon={faGithub} />,
    url: "https://github.com/pranaybad",
  },
  {
    name: "LinkedIn",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    url: "https://www.linkedin.com/in/pranay-badgujar-910720222/",
  },
];

const Followme = () => {
  return (
    <>
      <div className=" text-white ">
        <div   className=" w-full my-10    text-4xl font-extrabold 
        text-center">Follow Me</div>
        <div className="flex justify-center gap-10 text-7xl cursor-pointer">
          {icons.map((e) => {
            return (
              <>
                <div className="">
                  <button>
                    <Link to={e.url}>{e.icon}</Link>
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Followme;

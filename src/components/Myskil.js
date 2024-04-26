import React from "react";

const SkillBar = ({ skills, totalDots, skill2 }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full ">
      <div className=" w-full lg:w-1/2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-white lg:mx-14 md:mx-4 text-2xl px-5  md:px-20  py-5 flex   justify-between "
          >
            <p>{skill.name}</p>
            <div className="w-1/2">
              {[...Array(totalDots)].map((dot, i) => (
                <span
                  key={i}
                  style={{
                    height: "20px",
                    width: "20px",
                    backgroundColor: i < skill.skills ? "red" : "lightgray",
                    borderRadius: "50%",
                    display: "inline-block",
                    margin: "5px",
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className=" w-full lg:w-1/2">
        {skill2.map((skill, index) => (
          <div
            key={index}
            className="text-white lg:mx-14 md:mx-4 text-2xl px-5 md:px-20  py-5 flex  justify-between "
          >
            <p>{skill.name}</p>
            <div className=" w-1/2 ">
              {[...Array(totalDots)].map((dot, i) => (
                <span
                  key={i}
                  style={{
                    height: "20px",
                    width: "20px",
                    backgroundColor: i < skill.skills ? "red" : "lightgray",
                    borderRadius: "50%",
                    display: "inline-block",
                    margin: "5px",
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Myskil = () => {
  const data = [
    {
      name: "CSS",
      skills: 8,
    },
    {
      name: "HTML",
      skills: 8,
    },
    {
      name: "Tailwind",
      skills: 8,
    },
    {
      name: "React Js",
      skills: 7,
    },
    {
      name: "Next Js",
      skills: 7,
    },
  ];
  const data2 = [
    {
      name: "JavaScript",
      skills: 8,
    },
    {
      name: "AngularJS",
      skills: 6,
    },
    {
      name: "NodeJS",
      skills: 7,
    },
    {
      name: "MongoDB",
      skills: 7,
    },
    {
      name: "Mysql",
      skills: 9,
    },
  ];

  return (
    <>
      <div className="lg:mx-14 md:mx-4  " id="Myskills">
        <p className="  text-white text-4xl lg:text-9xl flex justify-center mb-16 font-extrabold">
          My <span className="text-[#d82828] ">Skills</span>
        </p>
        <SkillBar skills={data} skill2={data2} totalDots={10} />
      </div>
    </>
  );
};

export default Myskil;

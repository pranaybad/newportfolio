import React from "react";
import emailjs from "emailjs-com";

const Contactme = () => {
  // const serviceID = "service_7pshrq2";
  // const templateID = "template_fqi437v";
  // const userID = "kmL36lEuoVOjAwTcMAo6R";
  const serviceID = "service_bw1gxea";
  const templateID = "template_fgcyp65";
  const userID = "JPmFSIHCgbKWXFQ85";
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully! 😊");

        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message.");
      }
    );
  };
  return (
    <>
      <div className=" text-white py-5" id="Contact">
        <h1
          className=" w-full my-10    text-4xl font-extrabold 
        text-center"
        >
          Connect <span className="text-[#d82828]">with</span> me
        </h1>
        <form
          onSubmit={sendEmail}
          className="flex flex-col w-3/4 mx-auto text-3xl
          gap-5 
          bg-[#1b1b1b]
          p-10 rounded-2xl 
          "
        >
          <label>Name:</label>
          <input type="text" name="name" className="text-black" />

          <label>Email:</label>
          <input type="email" name="email" className="text-black" />

          <label>Message:</label>
          <textarea name="message" className="text-black" />

          <div className="w-full justify-center flex ">
            <button
              type="submit"
              className="cursor-pointer p-5 rounded-xl bg-[#d82828] "
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contactme;

// import React from "react";
// import emailjs from "emailjs-com";

// const Contactme = () => {
//   const serviceID = "service_j79yern";
//   const templateID = "template_yoqkme4";
//   const userID = "LTUU9M_FHgXUxhrmb";



//   // const serviceID = "service_bw1gxea";
//   // const templateID = "template_fgcyp65";
//   // const userID = "JPmFSIHCgbKWXFQ85";
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(serviceID, templateID, e.target, userID).then(
//       (result) => {
//         console.log(result.text);
//         alert("Message sent successfully! 😊");

//         e.target.reset();
//       },
//       (error) => {
//         console.log(error.text);
//         alert("Failed to send message.");
//       }
//     );
//   };
//   return (
//     <>
//       <div className=" text-white py-5" id="Contact">
//         <h1
//           className=" w-full my-10    text-4xl font-extrabold 
//         text-center"
//         >
//           Connect <span className="text-[#d82828]">with</span> me
//         </h1>
//         <form
//           onSubmit={sendEmail}
//           className="flex flex-col w-3/4 mx-auto text-3xl
//           gap-5 
//           bg-[#1b1b1b]
//           p-10 rounded-2xl 
//           "
//         >
//           <label>Name:</label>
//           <input placeholder="Enter Your Name" type="text" name="name" className="text-black text-xl p-3 rounded-md" />

//           <label>Email:</label>
//           <input placeholder="Enter Your Email" type="email" name="email" className="text-black text-xl p-3 rounded-md" />

//           <label>Message:</label>
//           <textarea placeholder="Enter Your Message" name="message" className="text-black text-xl p-3 rounded-md" />

//           <div className="w-full justify-center flex ">
//             <button
//               type="submit"
//               className="cursor-pointer p-5 rounded-xl bg-[#d82828] "
//             >
//               Send
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Contactme;



import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contactme = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const serviceID = "service_j79yern";
  const templateID = "template_yoqkme4";
  const userID = "LTUU9M_FHgXUxhrmb";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      ({ text }) => {
        console.log(text);
        alert("Message sent successfully! 😊");

        setName("");
        setEmail("");
        setMessage("");
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
          <input
            placeholder="Enter Your Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="text-black text-xl p-3 rounded-md"
          />

          <label>Email:</label>
          <input
            placeholder="Enter Your Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-black text-xl p-3 rounded-md"
          />

          <label>Message:</label>
          <textarea
            placeholder="Enter Your Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="text-black text-xl p-3 rounded-md"
          />

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
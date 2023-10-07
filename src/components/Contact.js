import { useState } from "react";
import React from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [emailError, setEmailError] = useState(true);
  const [nameError, setNameError] = useState(true);
  const [msgError, setMsgError] = useState(true);

  const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  const nameRegex = /^[A-Za-z\s'-]+$/;
  const allspace = /^\s*$/;
  const validateName = (e) => {
    if ( e.target.value.match(allspace) || e.target.value.length < 3 || !e.target.value.match(nameRegex)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(e.target.value);
  };

  const validateEmail = (e) => {
    if (!e.target.value.match(emailRegex)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(e.target.value);
  };

  const checkMsg = (e) => {
    if(e.target.value == '' || e.target.value.match(allspace))
      setMsgError(true)
    else
      setMsgError(false)

    setMsg(e.target.value)
  }

  const handleSubmitButton = (e) => {
    e.preventDefault();
    if (!nameError && !emailError && !msgError) {
      alert("Thanks for your submission, we will get back to you soon...");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else if(nameError || emailError){
      alert("Please Fill Valid name or Email.");
    } else if(msgError)
      alert("Kindly fill suggestion/feedback message")
  };

  return (
    <>
      <div className="max-w-[100vw] mx-6 lg:mx-auto flex justify-center items-center flex-wrap flex-col my-16" >
        <div className="max-w-[600px] md-w-[200px] bg-white rounded-lg shadow-xl p-8" style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <p className="font-serif text-gray-500 text-2xl text-center px-5 font-bold text-gradient-orange">
          We're Eager to Receive Your Feedback and Suggestions!
        </p>
        <form className="mt-8">
          <div className="mb-4">
            <label htmlFor="userName" className="font-semibold font-serif">
              Name:
            </label>
            <br />
            <input
              type="text"
              className="mb-2 border p-2 mt-3 border-black rounded-lg lg:w-[400px] sm:w-[300px]"
              name="userName"
              onChange={validateName}
            ></input>
            {nameError && (
              <p className="mt-[-8px] text-xs text-orange-400 font-semibold">
                Name should not be blank, <br/> Must be minimun 3 charcters, <br/> Integers not allowed
              </p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="userEmail" className="font-semibold font-serif">
              Email:
            </label>
            <br />
            <input
              type="email"
              className="mb-2 p-2 mt-3 border border-black rounded-lg lg:w-[400px] sm:w-[300px]"
              name="userEmail"
              onChange={validateEmail}
            ></input>
            {emailError && (
              <p className="mt-[-8px] text-xs text-orange-400 font-semibold">
                Enter a valid email address.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="font-semibold font-serif">
              Message:
            </label>
            <br />
            <textarea
              type="text"
              className="mb-2 p-2 mt-3 border border-black rounded w-[100%] lg:w-[400px] sm:w-[300px] min-h-[100px]"
              name="message"
              placeholder="Type your message here..."
              onChange={checkMsg}
            ></textarea>
          </div>

          <div className="flex justify-around">
            <button
              type="reset"
              className="text-xs font-medium shadow-lg px-2 py-2 outline-none m-2 right-10 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer"
            >
              Clear
            </button>
            <input
              type="submit"
              value="Submit"
              className="text-xs font-medium shadow-lg px-2 py-2 outline-none m-2 right-10 rounded border hover:border-black hover:bg-orange-300 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer bg-orange-400"
              onClick={handleSubmitButton}
            ></input>
          </div>
        </form>
        </div>
      </div>
    </>
  );
};


export default Contact;


import { useState, useEffect, useRef } from "react";
import React from "react";
import { useFocus } from "../utils/useFocus";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [msgError, setMsgError] = useState(false);

  // focus hook
  const [focusName, setFocusName] = useFocus();
  const [focusEmail, setFocusEmail] = useFocus();
  const [focusMessage, setFocusMessage] = useFocus();

  //onfocus, onBlur states
  const [isFocus, setIsFocus] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  const nameRegex = /^[A-Za-z\s'-]+$/;
  const allspace = /^\s*$/;
  const validateName = (e) => {
    console.log("Is blur=" + isBlur);
    setIsFocus(false);
    if (
      e.target.value.match(allspace) ||
      e.target.value.length < 3 ||
      !e.target.value.match(nameRegex)
    ) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(e.target.value);
  };

  const validateEmail = (e) => {
    setIsFocus(false);
    if (!e.target.value.match(emailRegex)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(e.target.value);
  };

  const checkMsg = (e) => {
    setIsFocus(false);
    if (e.target.value == "" || e.target.value.match(allspace))
      setMsgError(true);
    else setMsgError(false);

    setMsg(e.target.value);
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    if (name == "" && email == "" && msg == "") {
      setNameError(true);
      setEmailError(true);
      setMsgError(true);
    }
    if (
      name != "" &&
      email != "" &&
      msg != "" &&
      !nameError &&
      !emailError &&
      !msgError
    ) {
      alert("Thanks for your submission, we will get back to you soon...");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
  };
  const handleClearButton = () => {
    setName("");
    setEmail("");
    setMsg("");
    setNameError(false);
    setEmailError(false);
    setMsgError(false);
  };

  const handleNameKeyUp = (e, targetElem, name, nameError) => {
    if (e.key === "Enter" && name != "") {
      nameError ? null : targetElem?.current?.focus();
      console.log(nameError);
    }
  };

  const handleEmailKeyUp = (e, targetElem, email, emailError) => {
    if (e.key === "Enter" && email != "") {
      emailError ? null : targetElem?.current?.focus();
      console.log(emailError);
    }
  };

  const OnFocusHandler = (e) => {
    console.log(e.target.value);
    console.log("on focus");
    setIsFocus(true);
    setIsBlur(false);
  };

  return (
    <>
      <div className="max-w-[1320px] mx-6 lg:mx-auto flex justify-center items-center flex-wrap flex-col my-16">
        <p className=" text-gray-500 text-1xl font-bold text-gradient-orange">
          We're Eager to Receive Your Feedback and Suggestions!
        </p>
        <form className="mt-14" onSubmit={handleSubmitButton}>
          <div className="mb-4">
            <label htmlFor="userName" className="font-semibold">
              Name:
            </label>
            <br />

            <input
              type="text"
              className="mb-2 border p-2 mt-3 border-black rounded-lg w-[400px]"
              name="userName"
              value={name}
              onBlur={validateName}
              onFocus={OnFocusHandler}
              onKeyUp={(e) => {
                handleNameKeyUp(e, focusEmail, name, nameError);
              }}
              onChange={(e) => {
                const val = e.target.value;
                setName(val);
                validateName(e);
              }}
              ref={focusName}
            ></input>
            {nameError && (
              <p className="mt-[-8px] text-xs text-red-400 font-semibold">
                Name should not be blank, <br /> must be minimun 3 charcters,{" "}
                <br /> integers not allowed
              </p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="userEmail" className="font-semibold">
              Email:
            </label>
            <br />
            <input
              type="email"
              className="mb-2 p-2 mt-3 border border-black rounded-lg w-[400px]"
              value={email}
              ref={focusEmail}
              onFocus={OnFocusHandler}
              onKeyUp={(e) => {
                handleEmailKeyUp(
                  e,
                  focusMessage,
                  email,
                  emailError,
                  focusEmail
                );
              }}
              name="userEmail"
              onBlur={validateEmail}
              onChange={(e) => {
                const val = e.target.value;
                setEmail(val);
                validateEmail(e);
              }}
            ></input>
            {emailError && (
              <p className="mt-[-8px] text-xs text-red-400 font-semibold">
                Enter a valid email address.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="font-semibold">
              Message:
            </label>
            <br />
            <textarea
              type="text"
              className="mb-2 p-2 mt-3 border border-black rounded w-[100%] lg:w-[400px] min-h-[100px]"
              name="message"
              value={msg}
              onKeyUp={(e) => {
                handleKeyUp(e, focusMessage);
              }}
              ref={focusMessage}
              placeholder="Type your message here..."
              onBlur={checkMsg}
              onChange={checkMsg}
            ></textarea>
            {msgError && (
              <p className="mt-[-8px] text-xs text-red-400 font-semibold">
                Enter a message.
              </p>
            )}
          </div>

          <div className="flex justify-around">
            <button
              type="reset"
              className="text-xs font-medium shadow-md px-2 py-2 outline-none m-2 right-10 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer"
              onClick={handleClearButton}
            >
              Clear
            </button>
            <input
              type="submit"
              value="Submit"
              className="text-xs font-medium shadow-md px-2 py-2 outline-none m-2 right-10 rounded border border-gray-300 hover:border-gray-500 transition-all duration-200 ease-in-out text-gray-700 cursor-pointer"
              onClick={handleSubmitButton}
            ></input>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;

import { useState, useEffect, useRef } from "react";
import React from "react";
import { useFocus } from "../utils/useFocus";

import { FormControl, TextField, Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";

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
    }
  };

  const handleEmailKeyUp = (e, targetElem, email, emailError) => {
    if (e.key === "Enter" && email != "") {
      emailError ? null : targetElem?.current?.focus();
    }
  };

  const OnFocusHandler = (e) => {
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
          <FormControl>
            <TextField
              label={"Name"}
              name="name"
              variant="outlined"
              margin="normal"
              value={name}
              onBlur={validateName}
              onChange={(event) => {
                setName(event.target.value);
                validateName(event);
              }}
              onKeyUp={(e) => {
                handleNameKeyUp(e, focusEmail, name, nameError);
              }}
              inputRef={focusName}
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            {nameError && (
              <p className="mt-[-8px] text-xs text-red-400 font-semibold">
                Name should not be blank, <br /> must be minimun 3 charcters,{" "}
                <br /> integers not allowed
              </p>
            )}

            <TextField
              label={"Email"}
              name="userEmail"
              margin="normal"
              variant="outlined"
              value={email}
              inputRef={focusEmail}
              onBlur={validateEmail}
              onChange={(e) => {
                const val = e.target.value;
                setEmail(val);
                validateEmail(e);
              }}
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            {emailError && (
              <p className="mt-[-8px] text-xs text-red-400 font-semibold">
                Enter a valid email address.
              </p>
            )}
            <TextField
              label={"Message"}
              variant="outlined"
              name="message"
              placeholder="Type your message here..."
              margin="normal"
              value={msg}
              inputRef={focusMessage}
              onBlur={checkMsg}
              onChange={checkMsg}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MessageIcon />
                  </InputAdornment>
                ),
              }}
            />
            {msgError && (
              <p className="mt-[-8px] text-xs text-red-400 font-semibold">
                Enter a message.
              </p>
            )}
            <div className="flex justify-around" style={{ marginTop: 20 }}>
              <Button
                variant="outlined"
                margin="normal"
                type="reset"
                onClick={handleClearButton}
              >
                Clear
              </Button>
              <Button
                variant="contained"
                type="submit"
                value="Submit"
                onClick={handleSubmitButton}
              >
                Submit
              </Button>
            </div>
          </FormControl>
        </form>
      </div>
    </>
  );
};

export default Contact;

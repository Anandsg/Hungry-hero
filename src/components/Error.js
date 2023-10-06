import React from "react";
import { useRouteError } from "react-router-dom";
import ErrorImage from "../assets/404-Error.png";
import { Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img className="max-w-sm h-auto justify-center object-center my-1.5" src={ErrorImage} alt="Error 404 Not Found" />
      <h1 className="text-2xl font-bold text-red-500 my-1.5">Oops!</h1>
      <h2 className="text-xl my-1.5">The restaurant you are looking for does not exist.</h2>
      <Link className=" my-1.5 bg-white hover:bg-orange-300 text-gray-800 font-semibold py-2 px-4 border border-orange-300 rounded shadow"  to="/">Return Home</Link>
         
    </div>
  );
};

export default Error; 

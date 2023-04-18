import { useRouteError } from "react-router-dom";
import React from "react"

const Error = () => {
    const err =  useRouteError();
    console.log(err);
    return (
    <div>
        <h1>oops!</h1>
        <h2>Something went wrong.</h2>
        {/* <h2>{err.status + " : " + err.statusText }</h2> */}
    </div>
    )
}

export default Error;
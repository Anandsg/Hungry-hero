import React from "react";
import ReactDOM from "react-dom";

// React element
const heading = (
  <h1 className="head" tabIndex="5">
    React using JSX{" "}
  </h1>
);

// React functional component
const HeadingComponent = () => (
    <div id="container">
    <h1 className="heading">React using functional component</h1>
    </div>
)

// JSX code, JSX is looks like HTML not HTML, JSX is totally different
// const jsxheading = <h1 className="root">Anand Gadagin🚀 </h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering functional component

root.render(< HeadingComponent />)

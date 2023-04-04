import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement("h1", { id: "heading" }, "Anand G 🚀");

// JSX code, JSX is looks like HTML not HTML, JSX is totally different
const jsxheading = <h1 id="heading">Anand Gadagin🚀 </h1>;

console.log(jsxheading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading)

/*
<div id = "parent">
    <div id="child">
    <h1 id = "heading"> i am h1 tag</h1>
    </div>
        <div id="child2">
    <h1 id = "heading"> i am h1 tag</h1>
    </div>
</div>

*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag!"),
    React.createElement("h1", {}, "I am h1 tag!"),
  ]),   React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag!"),
    React.createElement("h1", {}, "I am h1 tag!"),
  ])]
);

console.log(parent);

// const heading = React.createElement("h1", { id: "heading" }, "Js react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

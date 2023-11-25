import React from "react";
import ReactDOM from "react-dom";
//createElement(is an object) => it is converted to h1 tag via the render method
//<div id="parent">
//  <div id="child">
//      <h1>welcome to react</h1>
//      <h2>lets get started</h2>
//  </div>
// </div>

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" }, //these are props basically attributes + children prop(remember we used it in core concepts project)
  "Hello world from viraj!"
);
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "welcome to react"),
    React.createElement("h2", {}, "lets get started"),
  ])
);
console.log(parent); //an object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //any code in html under root id will get replaced by the parent and not appended on the screen

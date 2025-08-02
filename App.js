// {/* <div id="Parent">
// <div id="child">
//     <h1>I am H1</h1>
// </div>
// </div> */
//     // reactElement(object) html browser undertsnad
// }
 import React from "react";
 import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" },[
React.createElement("div", { id: "child" },[
React.createElement("h1", { id: "h1" }, "I am H1"),
React.createElement("h2", { id: "h2" }, "I am H2")
]),
React.createElement("div", { id: "child2" },[
React.createElement("h1", { id: "h1" }, "I am H1"),
React.createElement("h2", { id: "h2" }, "I am H2")
]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

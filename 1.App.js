import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id:"heading"},"Hello World using React");
//  const root=ReactDOM.createRoot(document.getElementById("root"));
//  root.render(heading);

//nested div
/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
    </div>
</div> */
// const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
//        React.createElement("h1",{},"I'm h1 tag")));

//        const root=ReactDOM.createRoot(document.getElementById("root"));
//        root.render(parent);

//     <div id="parent">
//     <div id="child">
//         <h1>I'm h1 tag</h1>
//         <h2>I'm h2 tag</h2>
//     </div>
// </div>
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm h1 tag"),
//     React.createElement("h2", {}, "I'm h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm h1 tag"),
//     React.createElement("h2", {}, "I'm h2 tag"),
//   ])
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// 3]React
//React.createElement=> Object => HTMLElement(after rendering)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

//JSX (to make above code easy JSX came into existance)
//jsx (transpiled before it reaches the JS)-PARCEL-Babel
const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
);

// //React components
// -class based(old)
// -functional Compo(new)

// React functional Component
const HeadingCompnent = () => {
  return <h1> Namaste React functional component</h1>;
};
//or
//component compositon(nesting)
const HeadingComp = () => (
  <div id="heading">
    {HeadingCompnent()}
    <HeadingCompnent /> //rendering other function(nesting)
    <h1> Namaste React functional component</h1>
  </div>
); // we can skip keyword 'return' when there is single statement

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);//way to render react element
root.render(<HeadingComp />); //way to render react component



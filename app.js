import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   [
//     React.createElement(
//       "div",
//       { id: "child1", key: "child1" },
//       [
//         React.createElement("h1", { key: "child1-h1" }, "I am h1 tag"),
//         React.createElement("h2", { key: "child1-h2" }, "I am fgfdfgffgfrgfrtgfrth2 tag")
//       ]
//     ),
//     React.createElement(
//       "div",
//       { id: "child2", key: "child2" },
//       [
//         React.createElement("h1", { key: "child2-h1" }, "I am h1dfdlfd tag"),
//         React.createElement("h2", { key: "child2-h2" }, "I am h2 ertretag")
//       ]
//     )
//   ]
// );
const heading=React.createElement("h1",{id:"heading"},"learning React");
const jsxheading= (
<h1 id="heading"> 
  learninggg react
  </h1>
);
//react functional component
const HeadingComponent=()=>(
    <div id="container">
      <h1>React functional component</h1>;
    </div>
);
const title=(
  <h1 className="title">
    <span>React Element </span>
    hello World
  </h1>
);
const HeadingComponent2=()=>{
  return(
    <div id="container">
      {title};
      <h1>React functional component2</h1>;
    </div>
  );
};
console.log(jsxheading);
console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent2/>);

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child1", key: "child1" },
      [
        React.createElement("h1", { key: "child1-h1" }, "I am h1 tag"),
        React.createElement("h2", { key: "child1-h2" }, "I am fgfdfgffgfrgfrtgfrth2 tag")
      ]
    ),
    React.createElement(
      "div",
      { id: "child2", key: "child2" },
      [
        React.createElement("h1", { key: "child2-h1" }, "I am h1dfdlfd tag"),
        React.createElement("h2", { key: "child2-h2" }, "I am h2 ertretag")
      ]
    )
  ]
);

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(heading);

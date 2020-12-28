//import work just like require in reactJs
import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(what to update , where to update) -- this will render a HTML element using JS
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")
);

import React from "react"; //main library
import ReactDOM from "react-dom"; //render in a broswer
import App from "./App";

ReactDOM.render(
  //takes in what you want render and where you wanna render
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") //output to root in <div>
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

const headerText = document.getElementById("header-message");
const mobileIntro = document.getElementById("mobile-intro");
window.addEventListener("scroll", e => {
  let distFromTop = mobileIntro.getBoundingClientRect().top;
  let opacity = distFromTop / 368 - 1;
  headerText.style.opacity = opacity;
});

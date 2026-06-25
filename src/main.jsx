import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Lenis from "lenis";

// AOS
AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-out-cubic",
});

// Lenis
const lenis = new Lenis({
  duration: 1.4,
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
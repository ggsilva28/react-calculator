import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Calculator from "./main/Calculator";
import react_logo from './assets/React-icon.png';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Calculator />
    <img className="react-logo" src={react_logo} ></img>
	</React.StrictMode>
);

reportWebVitals();

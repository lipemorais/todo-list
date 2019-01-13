import "./style.css";
import React from "react";
import ReactDOM from "react-dom";

const reactComponent = () => <div className="hello">Hello React</div>;
ReactDOM.render(reactComponent(), document.getElementById("root"));

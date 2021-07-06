import React from "react";
import atom from "./atom.svg";
import "./style.css";

export default function Title() {
  return (
    <>
      <h1>
        30 days of React
        <img src={atom} alt="react" className="spin" />
      </h1>
      <h2>Day 1</h2>
    </>
  );
}

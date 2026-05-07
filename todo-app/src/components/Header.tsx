import React from "react";
import "./Header.css";
import Weather from "./Weather";

function Header() {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
      <div className="date-weather">
        <Weather />
      </div>
    </div>
  );
}

export default React.memo(Header);

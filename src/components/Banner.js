import React from "react";
import "../App.css";

function Banner() {
  return (
    <div className="banner">
      <img src="ribbon.svg" alt="icon" className="ribbon-icon" />
      Forbes Asia names <span className="highlight">BarqRaftar TECHNOLOGIES</span> to its{" "}
      <i>100 to Watch 2025</i> list
    </div>
  );
}

export default Banner;

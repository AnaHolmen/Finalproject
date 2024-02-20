import React from "react";
import Playing from "../components/Playing";

function Showtimes() {
  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div>
        <h1>Showtimes</h1>
        <Playing />
      </div>
    </div>
  );
}

export default Showtimes;

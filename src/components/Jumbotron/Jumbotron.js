import React from "react";
import "./Jumbotron.css";

const Jumbotron=props=>(
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">
        <strong>Match Game</strong>
      </h1>
      <p className="lead">
        {`Click an image, only once, to earn points.`}
        <br></br>
        {`Click any image to begin.`}
      </p>
    </div>
  </div>
);

export default Jumbotron;
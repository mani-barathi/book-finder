import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="container">
      <center>
        <h1>Error 404</h1>
        <p>The page you're trying to visit does not exists</p>
        <Link to="/"> Go to Home</Link>
      </center>
    </div>
  );
}

export default Error404;

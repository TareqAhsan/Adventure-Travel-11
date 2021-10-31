import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../../images/NotFound.png";
const PageNotFound = () => {
  return (
    <div>
      <div className="container my-5 py-4">
        <img className="w-100" src={NotFound} alt="" />
        <Link to="/">
          <button className="btn btn-danger">Back To home</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;

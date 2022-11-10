import React from "react";
import pageNotFound from "../Assets/images/pageNotFound.png";

const PageNotFound = () => {
  return (
    <div className="container text-center font-monospace">
      <img
        width={300}
        className="img-fluid"
        alt="Page Not Found"
        src={pageNotFound}
      />
      <h3 className="fs-4 text-danger">Oops!</h3>
      <p className="fs-6 text-danger">Cannot find what you are looking.</p>
    </div>
  );
};

export default PageNotFound;

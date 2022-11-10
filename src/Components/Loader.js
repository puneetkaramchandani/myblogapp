import React from "react";

const Loader = () => {
  return (
    <div className="container page d-flex justify-content-center align-items-center">
      <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;

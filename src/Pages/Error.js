import React, { Fragment } from "react";
import PageNotFound from "../Views/PageNotFound";

const Error = () => {
  return (
    <Fragment>
      <main className="page d-flex justify-content-center align-items-center">
        <PageNotFound />
      </main>
    </Fragment>
  );
};

export default Error;

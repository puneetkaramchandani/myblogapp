import React from "react";
import blogposts from "../Assets/images/blogposts.png";

const HomeHero = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={blogposts}
            className="d-block mx-lg-auto img-fluid bg-warning rounded"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>

        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            Checkout the amazing content!
          </h1>
          <p className="lead">
            Quickly read amazing content through our blazing, mobile first blog
            studio form anywhere in the world. Connect with amazing content
            creators and be a part of the community.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a
              href="#posts_list"
              type="button"
              className="btn btn-warning btn-lg px-4 me-md-2"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

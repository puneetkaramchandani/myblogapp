import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const PostDetails = ({ postDetails }) => {
  
  return (
    <div className="row p-2 p-lg-5 font-monospace g-2 g-md-3 justify-content-evenly">
      <div className="col-md-4">
        <img className="img-fluid rounded-2" src={postDetails.image} />
      </div>
      <div className="col-md-6">
        <div className="my-2">
          {postDetails.tags.map((tag,index) => (
            <span key={`${postDetails.id}_tag_${index}`} className="badge fs-5 bg-primary me-1">{tag}</span>
          ))}
        </div>
        <div className="mt-4 fs-5">
          <img
            height={50}
            width={50}
            className="me-2 border rounded-circle"
            src={postDetails.owner.picture}
            alt={postDetails.owner.firstName + postDetails.owner.lastName}
          />
          {"Author:" +
            " " +
            postDetails.owner.title.toUpperCase() +
            "." +
            " " +
            postDetails.owner.firstName +
            " " +
            postDetails.owner.lastName +
            " , " +
            "Posted At:" +
            moment(postDetails.publishDate).format("ll")}
        </div>
        <div className="mt-4 fs-4">
          Likes - <i className="fa-solid fa-heart text-danger"></i> {postDetails.likes}
        </div>
        <div className="mt-4">
          <textarea
            style={{ resize: "none" }}
            className="form-control"
            readOnly={true}
            value={postDetails.text}
          />
        </div>
      </div>
    </div>
  );
};

PostDetails.propTypes = {
  postDetails: PropTypes.object,
};

export default PostDetails;

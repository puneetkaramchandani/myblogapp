import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const PostsList = ({ data }) => {
  return (
    <div
      className="row m-0 p-2 p-lg-5 font-monospace g-2 g-md-3"
      id={"posts_list"}
    >
      <div className="col-12 container my-5">
        <h2>Checkout the amazing Blog Studio stories</h2>
      </div>
      {data &&
        data.map((item) => (
          <div key={item.id} className="col-md-6 col-lg-3">
            <div className="card h-100">
              <img height={200} className="card-img border rounded-top" src={item.image} />
              <div className="card-body">
                <div className="text-end">
                  <i class="fa-solid fa-heart text-danger"></i> {item.likes}
                </div>
                <div className="my-2">
                  {item.tags.map(tag=>(<span className="badge bg-primary me-1">{tag}</span>))}
                </div>
                <p>{item.text}</p>
                <p>Posted At : {moment(item.publishDate).format('LLL')}</p>
                <div className="text-end">
                <a href={`/post/${item.id}`} className="">Read More</a>
                </div>
              </div>
              <div className="card-footer d-flex align-items-center">
                <img
                  className="border rounded-circle me-2"
                  width="30"
                  height="30"
                  alt={item.owner.firstName + item.owner.lastName}
                  src={item.owner.picture}
                />
                {item.owner.title.toUpperCase() +
                  "." +
                  " " +
                  item.owner.firstName +
                  " " +
                  item.owner.lastName}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

PostsList.propTypes = {
  data: PropTypes.array,
};

export default PostsList;

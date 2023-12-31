import { isEmpty } from "lodash";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import DataLoadFailed from "../Components/DataLoadFailed";
import Loader from "../Components/Loader";
import { getPostDetailByPostId } from "../Utils/dummy_apis";
import PostDetails from "../Views/PostDetails";

const Post = () => {
  const { post_id } = useParams();
  const [postDetails, setPostDetails] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostDetailByPostId(post_id)
      .then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          setPostDetails(data);
        } else {
          toast.error(`Error - ${data.error}`);
        }
      })
      .catch((error) => {
        alert(`Something went wrong!`);
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Fragment>
      <main className="page d-flex justify-content-center align-items-center">
        {isEmpty(postDetails) && loading && <Loader />}
        {isEmpty(postDetails) && !loading && (
          <DataLoadFailed
            message={"Failed to load post details, something went wrong."}
          />
        )}
        {!isEmpty(postDetails) && !loading && (
          <PostDetails postDetails={postDetails} />
        )}
      </main>
    </Fragment>
  );
};

export default Post;

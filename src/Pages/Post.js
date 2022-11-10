import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostDetailByPostId } from "../Utils/dummy_apis";

const Post = () => {
  const { post_id } = useParams();
  const [postDetails, setPostDetails] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostDetailByPostId(post_id)
      .then(async (res) => {
        const data = await res.json();
        setPostDetails(data);
        console.log(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <h1>Post Page - {post_id}</h1>
    </main>
  );
};

export default Post;

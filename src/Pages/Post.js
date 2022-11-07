import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
    const {post_id} = useParams();
    return(
        <main>
            <h1>Post Page - {post_id}</h1>
        </main>
    );
};

export default Post;
import React, { useEffect, useState } from "react";
import { getPostPreviewList } from "../Utils/dummy_apis";

const Home = () => {
  const [postPreviewList, setPostPreviewList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostPreviewList()
      .then(async (res) => {
        const data = await res.json();
        console.log(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <h1>Home Page</h1>
    </main>
  );
};

export default Home;

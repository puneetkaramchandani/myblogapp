import React, { useEffect, useState } from "react";
import { getPostPreviewList } from "../Utils/dummy_apis";
import { isEmpty } from "lodash";
import Loader from "../Components/Loader";
import { toast } from "react-toastify";
import DataLoadFailed from "../Components/DataLoadFailed";

const Home = () => {
  const [postPreviewList, setPostPreviewList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostPreviewList()
      .then(async (res) => {
        const responseData = await res.json();
        if(res.ok){
          setPostPreviewList(responseData.data);
        } else {
          toast.error(`Error - ${responseData.error}`);
        }
      })
      .catch((error) => {
        alert(`Something went wrong!`);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="page d-flex justify-content-center align-items-center">
      {isEmpty(postPreviewList) && loading && <Loader/>}
      {isEmpty(postPreviewList) && !loading && <DataLoadFailed message={'Failed to load posts, something went wrong.'}/>}
      {!isEmpty(postPreviewList) && !loading && <h1>Home Page</h1>}
    </main>
  );
};

export default Home;

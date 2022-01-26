import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      //
    } else {
      //
    }
  }, [categoryId]);

  if (loading) {
    return <Spinner message="we are adding new ideas to your feeds" />;
  }
  return <div>Feed</div>;
};

export default Feed;

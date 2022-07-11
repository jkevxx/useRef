import React, { useState, useEffect, useRef } from "react";
import { getPost } from "./helpers/getPost";

const Card = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const isMountedRef = useRef(false);

  const updatePost = () => {
    getPost().then((newPost) => {
      setTimeout(() => {
        console.log(isMountedRef);
        if (isMountedRef.current) {
          setPost(newPost);
          setLoading(false);
        }
      }, 2000);
    });
  };

  useEffect(() => {
    updatePost();
    return () => {
      isMountedRef.current = true;
    };
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>{post.title}</h2>
    </div>
  );
};

export default Card;

import React from "react";
import { useRouter } from "next/router";
import { dataPost } from "../utils/data-post";

export default function PostOne() {
  const router = useRouter();

  const postId = router.query.post;
  if (postId == null) return <p>Loading...</p>;

  const post = dataPost.find((p) => String(p.id) === postId);
  if (post == null) return <p>Not found</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.imgUrl} alt="post" />
      <p>{post.text}</p>
    </div>
  );
}

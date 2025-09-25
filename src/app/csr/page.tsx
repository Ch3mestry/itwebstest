"use client";
import { useEffect, useState } from "react";
import { PostList } from "@/widgets/PostList/PostList";
import { getPosts, Post } from "@/entities/post";
import { PostForm } from "@/features/PostForm";

export default function CsrPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts()
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  if (!posts) {
    return <div>Posts not found</div>;
  }

  return (
    <>
      <PostForm />
      <h2 className="text-xl font-bold mb-2">Posts (CSR)</h2>
      <PostList posts={posts} />
    </>
  );
}

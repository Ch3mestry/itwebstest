"use client";

import { useEffect, useState } from "react";
import { getPosts } from "@/entities/post/api";
import { Post } from "@/entities/post/model";
import { PostList } from "@/widgets/postList";
import { PostForm } from "@/features/post-form/PostForm";

export default function CsrPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then(setPosts).catch(console.error);
  }, []);

  return (
    <div>
      <PostForm />

      <h2 className="text-xl font-bold mb-2">Posts (CSR)</h2>
      <PostList posts={posts} />
    </div>
  );
}

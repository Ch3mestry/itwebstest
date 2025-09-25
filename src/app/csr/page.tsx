"use client";

import { useEffect, useState } from "react";
import { getPosts } from "@/entities/post/api";
import { Post } from "@/entities/post/model";
import { PostList } from "@/shared/ui/postList";

export default function CsrPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then(setPosts).catch(console.error);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Posts (CSR)</h2>
      <PostList posts={posts} />
    </div>
  );
}

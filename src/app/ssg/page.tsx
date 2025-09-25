import { getPosts } from "@/entities/post/api";
import { Post } from "@/entities/post/model";
import { PostForm } from "@/features/post-form/PostForm";

import { PostList } from "@/widgets/postList";

export default async function SsgPage() {
  const posts: Post[] = await getPosts({ cache: "force-cache" });

  return (
    <div>
      <PostForm />
      <h2 className="text-xl font-bold mb-2">Posts (SSG)</h2>
      <PostList posts={posts} />
    </div>
  );
}

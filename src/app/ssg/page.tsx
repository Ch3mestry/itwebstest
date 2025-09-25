import { getPosts } from "@/entities/post/api";
import { Post } from "@/entities/post/model";
import { PostList } from "@/shared/ui/postList";

export default async function SsgPage() {
  const posts: Post[] = await getPosts({ cache: "force-cache" });

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Posts (SSG)</h2>
      <PostList posts={posts} />
    </div>
  );
}

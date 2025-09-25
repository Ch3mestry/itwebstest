import { getPosts } from "@/entities/post/api";
import { Post } from "@/entities/post/model";
import { PostList } from "@/widgets/postList";

export default async function SsrPage() {
  let posts: Post[] = [];
  try {
    posts = await getPosts();
  } catch (err) {
    console.error(err);
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Posts (SSR)</h2>
      <PostList posts={posts} />
    </div>
  );
}

import { getPosts } from "@/entities/post/api";
import { Post } from "@/entities/post/model";
import { PostList } from "@/widgets/postList";

export default async function IsrPage() {
  const posts: Post[] = await getPosts({ next: { revalidate: 60 } });

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Posts (ISR)</h2>
      <PostList posts={posts} />
    </div>
  );
}

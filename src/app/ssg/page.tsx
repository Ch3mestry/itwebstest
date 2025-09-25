import { getPosts } from "@/entities/post";
import { PostForm } from "@/features/PostForm";
import { PostList } from "@/widgets/PostList/PostList";

export default async function SsgPage() {
  const posts = await getPosts({ cache: "force-cache" });

  if (!posts) {
    return <div>Posts not found</div>;
  }

  return (
    <>
      <PostForm />
      <h2 className="text-xl font-bold mb-2">Posts (SSG)</h2>
      <PostList posts={posts} />
    </>
  );
}

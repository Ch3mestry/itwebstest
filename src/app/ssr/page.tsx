import { PostList } from "@/widgets/PostList";
import { PostForm } from "@/features/PostForm";
import { getPosts } from "@/entities/post";

export const dynamic = "force-dynamic";

export default async function SsrPage() {
  const posts = await getPosts();

  if (!posts) {
    return <div>Posts not found</div>;
  }

  return (
    <>
      <PostForm />
      <h2 className="text-xl font-bold mb-2">Posts (SSR)</h2>
      <PostList posts={posts} />
    </>
  );
}

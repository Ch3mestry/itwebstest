import { getPosts } from "@/entities/post";
import { PostForm } from "@/features/PostForm";
import { PostList } from "@/widgets/PostList/PostList";

export default async function IsrPage() {
  const posts = await getPosts({ next: { revalidate: 60 } });

  if (!posts) {
    return <div>Posts not found</div>;
  }

  return (
    <>
      <PostForm />
      <h2 className="text-xl font-bold mb-2">Posts (ISR)</h2>
      <PostList posts={posts} />
    </>
  );
}

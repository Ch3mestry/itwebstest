import { Post } from "@/entities/post/model";
import { PostCard } from "@/entities/post/ui/Postcard";

type PostListProps = {
  posts: Post[];
};

export function PostList({ posts }: PostListProps) {
  return (
    <ul className="list-disc pl-4">
      {posts.slice(0, 5).map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </ul>
  );
}

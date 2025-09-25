import { Post, PostCard } from "@/entities/post";

type PostListProps = {
  posts: Post[];
};

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul className="list-disc pl-4">
      {posts?.slice(0, 5).map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </ul>
  );
};

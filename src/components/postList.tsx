import PostItem, { type PostItemType } from "./postItem.tsx";
import { Loader } from "./UI/loader/loader.tsx";

interface PostListProps {
  posts: PostItemType[];
  title: string;
  onDelete: (post: PostItemType) => void;
  isLoading?: boolean;
  error?: string;
}

const PostList = (props: PostListProps) => {
  const { posts, title, onDelete, isLoading = false, error } = props;

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Loader />
      </div>
    );
  }

  if (error) return <div>An error happened</div>;

  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Posts not found</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, i) => (
        <PostItem onDelete={onDelete} order={i + 1} key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;

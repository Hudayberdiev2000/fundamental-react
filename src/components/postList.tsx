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

  if (error) return <div>An error happened</div>;

  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Posts not found</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, ) => (
        <PostItem onDelete={onDelete} order={post.id} key={post.id} post={post} />
      ))}
        {isLoading &&  <Loader />}
    </div>
  );
};

export default PostList;

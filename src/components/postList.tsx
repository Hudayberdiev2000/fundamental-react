import PostItem, {type PostItemType} from "./postItem.tsx";

interface PostListProps {
  posts: PostItemType[];
  title: string
    onDelete: (post: PostItemType) => void;
}

const PostList = (props: PostListProps) => {
    const { posts, title, onDelete } = props;
    return (
        <div>
            <h1 style={{textAlign:"center"}}>{title}</h1>
            {posts.map((post, i) => (
                <PostItem onDelete={onDelete } order={i + 1} key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
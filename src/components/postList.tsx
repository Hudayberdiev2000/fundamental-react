import PostItem, {type PostItemType} from "./postItem.tsx";

interface PostListProps {
  posts: PostItemType[];
  title: string
}

const PostList = (props: PostListProps) => {
    const { posts, title } = props;
    return (
        <div>
            <h1 style={{textAlign:"center"}}>{title}</h1>
            {posts.map(post => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
import MyButton from "./UI/button/myButton.tsx";

export type PostItemType = {
  id: number;
  title: string;
  body: string;
};

interface PostItemProps {
  post: PostItemType;
  order: number;
  onDelete: (post: PostItemType) => void;
}

const PostItem = (props: PostItemProps) => {
  const { post, order, onDelete } = props;
  return (
    <div className="post">
      <div className="post-content">
        <strong>
          {order}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => onDelete(post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;

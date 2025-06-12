
export type PostItemType = {
    id: number,
    title: string,
    body: string,
}

interface PostItemProps {
    post: PostItemType;
    order: number;
}

const PostItem = (props: PostItemProps) => {
    const { post: { title, body }, order } = props;
    return (
        <div className="post">
            <div className="post-content">
                <strong>{order}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className="post__btns">
                <button>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;
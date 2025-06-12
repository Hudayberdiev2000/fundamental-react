
export type PostItemType = {
    id: number,
    title: string,
    body: string,
}

interface PostItemProps {
    post: PostItemType;
}

const PostItem = (props: PostItemProps) => {
    const { id, title, body } = props.post;
    return (
        <div className="post">
            <div className="post-content">
                <strong>{id}. {title}</strong>
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
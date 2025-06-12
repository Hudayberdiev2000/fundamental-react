import MyInput from "./UI/input/myInput.tsx";
import MyButton from "./UI/button/myButton.tsx";
import {useState} from "react";
import type {PostItemType} from "./postItem.tsx";

interface PostFormProps {
    create?: (post: PostItemType) => void;
}

const PostForm = (props: PostFormProps) => {
    const { create } = props;
    const [post, setPost] = useState<Omit<PostItemType, "id">>({
        title: "",
        body: ""
    });

    function addNewPost(
        e:  React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        e.preventDefault();
        const newPost:  PostItemType = {...post, id: Date.now()};
        create?.(newPost);
        setPost({
            title: "",
            body: ""
        })
    }

    return (
        <form>
            <MyInput
                value={post.title}
                type="text"
                placeholder="Title of post"
                onChange={(e) => (
                    setPost({...post, title: e.target.value})
                )}
            />
            <MyInput
                value={post.body}
                type="text"
                placeholder="Body of post"
                onChange={(e) => (
                    setPost({...post, body: e.target.value})
                )}
            />
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};

export default PostForm;
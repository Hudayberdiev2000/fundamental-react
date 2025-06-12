import './styles/app.css'
import {useRef, useState} from "react";
import PostList from "./components/postList.tsx";
import MyButton from "./components/UI/button/myButton.tsx";
import MyInput from "./components/UI/input/myInput.tsx";
import type {PostItemType} from "./components/postItem.tsx";

function App() {
    const  [posts, setPosts] = useState([
        { id: 1, title: "JavaScript", body: "Description of JavaScript" },
        { id: 2, title: "TypeScript", body: "Description of TypeScript" },
        { id: 3, title: "React", body: "Description of React" },

    ]);
    const [post, setPost] = useState<Omit<PostItemType, "id">>({
        title: "",
        body: ""
    });

    function addNewPost(
        e:  React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        e.preventDefault();
        setPosts([...posts, {...post, id: Date.now()}]);
        setPost({
            title: "",
            body: ""
        })
    }

  return (
      <div className="app">
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
        <PostList posts={posts} title="List of posts" />
      </div>
  )
}

export default App

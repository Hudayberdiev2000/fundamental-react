import './styles/app.css'
import {useState} from "react";
import PostList from "./components/postList.tsx";
import MyButton from "./components/UI/button/myButton.tsx";
import MyInput from "./components/UI/input/myInput.tsx";

function App() {
    const  [posts, setPosts] = useState([
        { id: 1, title: "JavaScript", body: "Description of JavaScript" },
        { id: 2, title: "TypeScript", body: "Description of TypeScript" },
        { id: 3, title: "React", body: "Description of React" },
        { id: 4, title: "Vue", body: "Description of Vue.js" },
        { id: 5, title: "Angular", body: "Description of Angular" },
        { id: 6, title: "Node.js", body: "Description of Node.js" },
        { id: 7, title: "Express", body: "Description of Express.js" },
        { id: 8, title: "MongoDB", body: "Description of MongoDB" },
        { id: 9, title: "Next.js", body: "Description of Next.js" },
        { id: 10, title: "HTML & CSS", body: "Description of HTML and CSS" },
    ]);
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");

    function addNewPost(
        e:  React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        e.preventDefault();
        console.log(title, body);
    }

  return (
      <div className="app">
          <form>
              <MyInput
                  value={title}
                  type="text"
                  placeholder="Title of post"
                  onChange={(e) => setTitle(e.target.value)}
              />
              <MyInput
                  value={body}
                  type="text"
                  placeholder="Body of post"
                  onChange={(e) => setBody(e.target.value)}
              />
              <MyButton onClick={addNewPost}>Create post</MyButton>
          </form>
        <PostList posts={posts} title="List of posts" />
      </div>
  )
}

export default App

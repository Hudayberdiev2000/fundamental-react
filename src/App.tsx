import './styles/app.css'
import {useMemo, useState} from "react";
import PostList from "./components/postList.tsx";
import type {PostItemType} from "./components/postItem.tsx";
import PostForm from "./components/postForm.tsx";
import MySelect from "./components/UI/select/mySelect.tsx";
import MyInput from "./components/UI/input/myInput.tsx";

function App() {
    const  [posts, setPosts] = useState([
        { id: 1, title: "JavaScript", body: "Description of JavaScript" },
        { id: 2, title: "TypeScript", body: "Description of TypeScript" },
        { id: 3, title: "React", body: "Description of React" },

    ]);
    const [selectedSort,  setSelectedSort] = useState<keyof Omit<PostItemType, "id"> | "">("");
    const [searchQuery, setSearchQuery] = useState<string>('');

    const sortedPosts: PostItemType[] = useMemo(() => {
        if(selectedSort) {
            return [...posts.sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))]
        }
        return posts;
    }, [selectedSort, posts]);

    const sortedAndSearchedPosts: PostItemType[] = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPosts]);

    function createPost(post: PostItemType) {
        setPosts([...posts, post]);
    }

    function deletePost(post: PostItemType) {
        setPosts(posts.filter(item => item.id !== post.id));
    }

    function sortPosts(sort: keyof Omit<PostItemType, "id"> | "") {
        setSelectedSort(sort);
    }


  return (
      <div className="app">
        <PostForm create={createPost} />
          <hr style={{margin: "15px 0"}} />
          <div>
              <MyInput placeholder="Search..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              />
              <MySelect
                  value={selectedSort}
                  onChange={sortPosts}
                  options={[
                  {value: "title", label: "Title"}, {value: "body", label: "Body"},
              ]}
                  defaultValue="Sort"
              />
          </div>
          {sortedAndSearchedPosts.length > 0 ? (
              <PostList
                  onDelete={deletePost}
                  posts={sortedAndSearchedPosts} title="List of posts" />
          ) : (
              <h1 style={{textAlign: "center"}}>Posts not found</h1>
          )}
      </div>
  )
}

export default App

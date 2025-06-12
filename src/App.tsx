import "./styles/app.css";
import { useMemo, useState } from "react";
import PostList from "./components/postList.tsx";
import type { PostItemType } from "./components/postItem.tsx";
import PostForm from "./components/postForm.tsx";
import PostFilter from "./components/postFilter.tsx";

export interface PostFilterType {
  sort: keyof Omit<PostItemType, "id"> | "";
  query: string;
}

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description of JavaScript" },
    { id: 2, title: "TypeScript", body: "Description of TypeScript" },
    { id: 3, title: "React", body: "Description of React" },
  ]);

  const [filter, setFilter] = useState<PostFilterType>({
    sort: "",
    query: "",
  });

  const sortedPosts: PostItemType[] = useMemo(() => {
    if (filter.sort) {
      return [
        ...posts.sort((a, b) => a[filter.sort].localeCompare(b[filter.sort])),
      ];
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts: PostItemType[] = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  function createPost(post: PostItemType) {
    setPosts([...posts, post]);
  }

  function deletePost(post: PostItemType) {
    setPosts(posts.filter((item) => item.id !== post.id));
  }

  return (
    <div className="app">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        onDelete={deletePost}
        posts={sortedAndSearchedPosts}
        title="List of posts"
      />
    </div>
  );
}

export default App;

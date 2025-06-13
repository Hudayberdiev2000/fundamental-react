import "./styles/app.css";
import { useEffect, useState } from "react";
import PostList from "./components/postList.tsx";
import type { PostItemType } from "./components/postItem.tsx";
import PostForm from "./components/postForm.tsx";
import PostFilter from "./components/postFilter.tsx";
import { MyModal } from "./components/UI/modal/myModal.tsx";
import MyButton from "./components/UI/button/myButton.tsx";
import { usePosts } from "./hooks/usePosts.ts";
import { PostService } from "./API/postService.ts";
import { useFetch } from "./hooks/useFetch.ts";

export interface PostFilterType {
  sort: keyof Omit<PostItemType, "id"> | "";
  query: string;
}

function App() {
  const [posts, setPosts] = useState<PostItemType[]>([]);

  const [filter, setFilter] = useState<PostFilterType>({
    sort: "",
    query: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter);
  const {
    fetching: getPosts,
    isLoading,
    error,
  } = useFetch(async () => {
    const response = await PostService.getAll(10, 1);
    if (response) setPosts(response);
  });

  function createPost(post: PostItemType) {
    setPosts([...posts, post]);
    setIsModalOpen(false);
  }

  function deletePost(post: PostItemType) {
    setPosts(posts.filter((item) => item.id !== post.id));
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="app">
      <MyButton style={{ marginTop: 30 }} onClick={() => setIsModalOpen(true)}>
        Create post
      </MyButton>
      <MyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ marginTop: 15, marginBottom: 15 }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        error={error}
        isLoading={isLoading}
        onDelete={deletePost}
        posts={sortedAndSearchedPosts}
        title="List of posts"
      />
    </div>
  );
}

export default App;

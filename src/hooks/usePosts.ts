import { useMemo } from "react";
import type { PostItemType } from "../components/postItem";
import type {PostFilterType} from "../pages/posts.tsx";

export const useSortedPosts = (
  posts: PostItemType[],
  sort: keyof Omit<PostItemType, "id"> | ""
) => {
  const sortedPosts: PostItemType[] = useMemo(() => {
    if (sort) {
      return [...posts.sort((a, b) => a[sort].localeCompare(b[sort]))];
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts: PostItemType[], filter: PostFilterType) => {
  const sortedPosts = useSortedPosts(posts, filter.sort);

  const sortedAndSearchedPosts: PostItemType[] = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  return sortedAndSearchedPosts;
};

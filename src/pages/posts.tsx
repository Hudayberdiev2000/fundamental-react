import {useCallback, useEffect, useRef, useState} from "react";
import type {PostItemType} from "../components/postItem.tsx";
import {usePosts} from "../hooks/usePosts.ts";
import {useFetch} from "../hooks/useFetch.ts";
import {PostService} from "../API/postService.ts";
import {getTotalPagesCount} from "../utils/pages.ts";
import MyButton from "../components/UI/button/myButton.tsx";
import {MyModal} from "../components/UI/modal/myModal.tsx";
import PostForm from "../components/postForm.tsx";
import PostFilter from "../components/postFilter.tsx";
import PostList from "../components/postList.tsx";
import {Pagination} from "../components/UI/pagination/pagination.tsx";
import type {PaginationType} from "../types/types.ts";
import {useInfiniteScroll} from "../hooks/useObserver.ts";
import MySelect from "../components/UI/select/mySelect.tsx";

export interface PostFilterType {
    sort: keyof Omit<PostItemType, "id"> | "";
    query: string;
}

export function Posts() {
    const [posts, setPosts] = useState<PostItemType[]>([]);
    const [filter, setFilter] = useState<PostFilterType>({
        sort: "",
        query: "",
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [limit, setLimit] = useState<number>(10);
    const [page, setPage] = useState<number>(1);
    const lastElementRef = useRef<HTMLDivElement | null>(null);

    const sortedAndSearchedPosts = usePosts(posts, filter);
    const {
        fetching: getPosts,
        isLoading,
        error,
    } = useFetch<PaginationType>(async ({limit, page}) => {
        const response = await PostService.getAll({limit, page});
        setPosts([...posts, ...response.data]);
        const totalCount: number = response.headers["x-total-count"]
        setTotalPages(getTotalPagesCount(totalCount, limit));
    });

    function createPost(post: PostItemType) {
        setPosts([...posts, post]);
        setIsModalOpen(false);
    }

    function deletePost(post: PostItemType) {
        setPosts(posts.filter((item) => item.id !== post.id));
    }

    const handleIntersect = useCallback(() => {
        setPage(prev => prev + 1);
    }, [])

    useInfiniteScroll<HTMLDivElement>({
        isLoading,
        hasMore: page < totalPages,
        onIntersect: handleIntersect,
        ref: lastElementRef,
    });


    useEffect(() => {
        getPosts({limit, page});
    }, [page, limit]);

    const changePage = (page: number) => {
        setPage(page);
    }

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
            <MySelect
                value={limit.toString()}
                options={[
                    {
                        value: "5",
                        label: "5"
                    },
                    {
                        value: "10",
                        label: "10"
                    },
                    {
                        value: "15",
                        label: "15"
                    },
                    {
                        value:"20",
                        label: "20"
                    }
                ]}
                defaultValue={limit.toString()}
                onChange={value => setLimit(+value)}
            />

            <PostList
                error={error}
                isLoading={isLoading}
                onDelete={deletePost}
                posts={sortedAndSearchedPosts}
                title="List of posts"
            />
            <div ref={lastElementRef} style={{background: "red", height: "20px"}} />
            <Pagination totalPages={totalPages} page={page} onPageChange={changePage}  />
        </div>
    );
}


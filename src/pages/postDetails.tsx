import {useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch.ts";
import {PostService} from "../API/postService.ts";
import {useEffect, useState} from "react";
import type {PostItemType} from "../components/postItem.tsx";
import {Loader} from "../components/UI/loader/loader.tsx";

export const PostDetails = () => {
    const params = useParams()
    const [post, setPost] = useState<PostItemType | null>(null)
    const {fetching: fetchPost, isLoading} = useFetch( async () => {
        const response = await PostService.getById(Number(params.postId))
        setPost(response.data)
    })

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        fetchPost(Number(params.id))
    }, [])

    return (
        <div>
            <h1>
               Post Details page. ID: {params.postId}
            </h1>
            {isLoading ? <Loader /> : <div>{post?.id} {post?.title}</div>}

        </div>
    );
};


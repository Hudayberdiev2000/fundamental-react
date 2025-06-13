import {useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch.ts";
import {PostService} from "../API/postService.ts";
import {useEffect, useState} from "react";
import type {PostItemType} from "../components/postItem.tsx";
import {Loader} from "../components/UI/loader/loader.tsx";

interface PostDetailsPageParams {
    postId: string;
}

export const PostDetails = () => {
    const params = useParams<keyof PostDetailsPageParams>() as PostDetailsPageParams
    const id = Number(params.postId)
    const [post, setPost] = useState<PostItemType | null>(null)
    const {fetching: fetchPost, isLoading} = useFetch<number>( async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPost(id)
    }, [])

    return (
        <div>
            <h1>
               Post Details page. ID: {params.postId}
            </h1>
            {isLoading ? <Loader /> : <div>{post?.id} {post?.title}</div>}

            <h1>Comments</h1>

        </div>
    );
};


import {useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch.ts";
import {PostService} from "../API/postService.ts";
import {useEffect, useState} from "react";
import type {PostItemType} from "../components/postItem.tsx";
import {Loader} from "../components/UI/loader/loader.tsx";
import type {PostComment} from "../types/types.ts";

interface PostDetailsPageParams {
    postId: string;
}

export const PostDetails = () => {
    const params = useParams<keyof PostDetailsPageParams>() as PostDetailsPageParams
    const id = Number(params.postId)
    const [post, setPost] = useState<PostItemType | null>(null)
    const [comments, setComments] = useState<PostComment[]>([])
    const {fetching: fetchPost, isLoading} = useFetch<number>( async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const {fetching: fetchComments, isLoading: isCommentsLoading} = useFetch<number>(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPost(id)
        fetchComments(id)
    }, [])

    return (
        <div>
            <h1>
               Post Details page. ID: {params.postId}
            </h1>
            {isLoading ? <Loader /> : <div>{post?.id} {post?.title}</div>}

            <h1>Comments</h1>
            {isCommentsLoading ? <Loader /> : <div>
                {comments.map(comm => (
                    <div style={{marginTop:15}}>
                        <h5>{comm.email}</h5>
                        <div>{comm.body}</div>
                    </div>
                ))}
            </div>}
        </div>
    );
};


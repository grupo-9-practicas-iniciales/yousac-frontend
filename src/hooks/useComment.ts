import { ApiCreateCommentResponse, ApiGetCommentsResponse, CommentInterface } from "../api";
import { useApi } from "./"
import { useEffect, useState } from 'react';


export const useComment = (idPost: number) => {

    const { response: fetchCommentResponse, perfomFetch } = useApi<ApiGetCommentsResponse>();
    const { response: createCommentResponse, perfomFetch: perfomCreate } = useApi<ApiCreateCommentResponse>();

    const [comments, setComments] = useState<CommentInterface[]>([])

    // * Loads comments of post
    useEffect(() => {

        if (comments.length === 0) {
            perfomFetch({
                url: `/comment/${idPost}`,
                method: 'get'
            })
        }

    }, [])

    // * Sets comments of post
    useEffect(() => {
        if (fetchCommentResponse) {
            setComments(fetchCommentResponse.comments)
        }
    }, [fetchCommentResponse])

    // * Creates a comment
    const createComment = (message: string) => {

        perfomCreate({
            url: `/comment`,
            method: 'post',
            body: {
                idPost,
                message
            }
        })
    }

    // * Update comments when a comment is created

    useEffect(() => {

        if (createCommentResponse) {
            setComments([createCommentResponse.comment, ...comments])
        }

    }, [createCommentResponse])


    return {
        comments,
        createComment
    }

}
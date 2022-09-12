import React, { useEffect } from 'react'
import { ApiSearchPostResponse } from '../../../api';
import { useApi, useContentStore } from '../../../hooks';

export const SearchLatest = () => {

    const { setPosts } = useContentStore();
    const { perfomFetch, response } = useApi<ApiSearchPostResponse>();


    // * LATEST POSTS
    useEffect(() => {

        console.log('posts clean')
        setPosts([]);

        console.log('fetching latest posts');
        perfomFetch({
            url: `/search`,
            method: "post",
        });
    }, []);

    useEffect(() => {
        if (response) {
            console.log('posts set')
            setPosts(response.posts);
        }
    }, [response]);


    return (
        <></>
    )
}

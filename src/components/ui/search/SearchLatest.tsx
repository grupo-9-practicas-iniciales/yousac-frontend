import { useEffect } from "react";
import { ApiSearchPostResponse } from "../../../api";
import { useApi, useContentStore } from "../../../hooks";

export const SearchLatest = () => {
  const { setPosts } = useContentStore();
  const { perfomFetch, response } = useApi<ApiSearchPostResponse>();

  // * LATEST POSTS
  useEffect(() => {
    setPosts([]);

    perfomFetch({
      url: `/search`,
      method: "post",
    });
  }, []);

  useEffect(() => {
    if (response) {
      setPosts(response.posts);
    }
  }, [response]);

  return <></>;
};

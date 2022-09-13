import { SearchSection, WavyFooter, Navbar, GridCardMain } from "../components";
import { useContentStore, useApi } from "../hooks";
import { useEffect } from "react";
import { ApiSearchPostResponse } from "../api";
import { useNewTitle } from '../hooks/useNewTitle';

export const MainAppPage = () => {
  const { posts, users, selectedIdSection, setPosts } = useContentStore();
  useNewTitle("Inicio")
  const { perfomFetch, response } = useApi<ApiSearchPostResponse>();
  useEffect(() => {
    // * SEARCH POSTS

    if (selectedIdSection != "") {
      perfomFetch({
        url: `/search?param=post`,
        method: "post",
        body: {
          idSection: selectedIdSection,
        },
      });
    }
  }, [selectedIdSection]);

  // * FIRST LOAD (LATEST POSTS)
  useEffect(() => {
    // * Dont fetch if there is a search or if is already loaded a post or user
    if (selectedIdSection == "" && posts.length == 0 && users.length == 0) {
      perfomFetch({
        url: `/search`,
        method: "post",
      });
    }
  }, []);

  useEffect(() => {
    // * Loads the posts in the store
    if (response) {
      setPosts(response.posts);
    }
  }, [response]);

  return (
    <>
      <main className="min-h-screen bg-light dark:bg-dark overflow-x-hidden transition-colors">
        <Navbar />
        <div className="flex flex-col justify-center items-center mb-10">
          <SearchSection />
          <GridCardMain posts={posts} users={users} />
        </div>
      </main>
      <WavyFooter />
    </>
  );
};

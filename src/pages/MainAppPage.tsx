import { useAuthStore } from "../hooks/useAuthStore";
import { Navbar } from "../components/ui/navbar/Navbar";
import { SearchSection, WavyFooter } from "../components";
import { useContentStore } from "../hooks/useContentStore";
import { useEffect, useState } from 'react';
import { useApi } from "../hooks/useApi";
import { ApiSearchPostResponse } from "../api";
import { GridCard } from "../components/ui/card/GridCard";

export const MainAppPage = () => {
  const { user } = useAuthStore();
  const { posts, users, selectedIdSection, setPosts } = useContentStore();
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
    if (selectedIdSection == '' && posts.length == 0 && users.length == 0) {
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
        <Navbar user={user} />
        <div className="flex flex-col justify-center items-center">
          <SearchSection />
          <GridCard posts={posts} users={users} />
        </div>
      </main>
      <WavyFooter />
    </>
  );
};

import { useAuthStore } from "../hooks/useAuthStore";
import { Navbar } from "../components/ui/navbar/Navbar";
import { SearchSection, WavyFooter } from "../components";
import { useContentStore } from "../hooks/useContentStore";
import { useEffect } from "react";
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

  // * LATEST POSTS
  useEffect(() => {
    if (selectedIdSection == "") {
      perfomFetch({
        url: `/search`,
        method: "post",
      });
    }
  }, []);

  useEffect(() => {
    if (response) {
      setPosts(response.posts);
    } else {
      setPosts([]);
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

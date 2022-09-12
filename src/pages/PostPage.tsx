import { Navigate } from "react-router-dom";
import { CardPost, Navbar } from "../components";
import { useContentStore, useNewTitle } from "../hooks";

import "animate.css";
import { ScrollToTop } from "../components/helpers/ScrollToTop";

export const PostPage = () => {
  const { selectedPost } = useContentStore();
  useNewTitle(selectedPost?.title);

  if (!selectedPost) {
    return <Navigate to="/app" />;
  }

  return (
    <div className="bg-white dark:bg-dark transition-colors">
      <ScrollToTop />
      <Navbar />
      <div
        className="flex mt-5 md:mt-7 p-10 md:p-16 lg:p-0 justify-center mx-auto min-h-screen w-full
        animate__animated animate__fadeIn"
      >
        <div className="max-w-2xl w-full">
          <CardPost post={selectedPost} behavior="default" />
        </div>
      </div>
    </div>
  );
};

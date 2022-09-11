import { Navigate } from "react-router-dom";
import { CardPost } from "../components";
import { useContentStore } from "../hooks";

import "animate.css";

export const PostPage = () => {
  const { selectedPost } = useContentStore();

  if (!selectedPost) {
    return <Navigate to="/app" />;
  }

  return (
    <>
      <div
        className="bg-white dark:bg-dark min-h-screen w-full p-5 transition-all
      animate__animated animate__fadeIn"
      >
        <CardPost post={selectedPost} behavior="default" />
      </div>
    </>
  );
};

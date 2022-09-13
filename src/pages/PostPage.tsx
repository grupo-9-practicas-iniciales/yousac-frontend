import { Navigate } from "react-router-dom";
import {
  CardCreateComment,
  CardPost,
  Navbar,
  ScrollToTop,
} from "../components";
import { useComment, useContentStore, useNewTitle } from "../hooks";

import { GridCardComment } from "../components/ui/card/grid/GridCardComment";

import "animate.css";

export const PostPage = () => {
  const { selectedPost } = useContentStore();
  useNewTitle(selectedPost?.title);

  if (!selectedPost) {
    return <Navigate to="/app" />;
  }

  const { comments, createComment } = useComment(selectedPost.idPost);

  return (
    <div className="bg-white dark:bg-dark transition-colors">
      <ScrollToTop />
      <Navbar />
      <div
        className="flex flex-col max-w-2xl mt-5 py-5 p-10 md:p-16 lg:p-0 mx-auto min-h-screen w-full
        animate__animated animate__fadeIn"
      >
        <CardPost post={selectedPost} behavior="default" />
        <CardCreateComment createComment={createComment} />
        <GridCardComment comments={comments} />
      </div>
    </div>
  );
};

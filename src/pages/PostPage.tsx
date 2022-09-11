import { Navigate } from "react-router-dom";
import { useContentStore } from "../hooks";

export const PostPage = () => {

  const { selectedPost } = useContentStore();

  if (!selectedPost) {
    return <Navigate to='/app' />
  }


  return (
    <div>PostPage</div>
  )
}

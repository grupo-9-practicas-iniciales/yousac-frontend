import { Link } from "react-router-dom";
import { Avatar } from "../../";
import { PostInterface } from "../../../api";
import { formatDateToWords } from "../../../utils";
import { useContentStore } from "../../../hooks/useContentStore";

type CardPostProps = {
  post: PostInterface;
  behavior: "default" | "card";
};

export const CardPost = ({ post, behavior }: CardPostProps) => {
  const postDate = formatDateToWords(Date.parse(post.createdAt));
  const { setSelectedPost } = useContentStore();

  return (
    <>
      <div
        className={
          behavior === "default"
            ? ""
            : "flex space-x-3 md:space-x-4 lg:space-x-5 coursor"
        }
      >
        <Avatar user={post.user} />
        <div
          className={
            behavior === "default"
              ? ""
              : "flex flex-col text-sm lg:text-base text-left w-full font-medium"
          }
        >
          <h3>{post.section.course?.name}</h3>
          <p className="text-gray-100">
            {`${post.user.names} ${post.user.lastnames}`}
          </p>
          <p>{`${postDate}`}</p>
        </div>
      </div>
      <h4 className="text-center text-base lg:text-lg font-semibold">
        {post.title}
      </h4>
      <div className="flex flex-col text-xs md:text-sm space-y-2 dark:text-white">
        <p>
          {" "}
          {post.section.course && (
            <>
              {" "}
              <strong>Curso: </strong>{" "}
              {`${post.section.course.code} : ${
                post.section.course.name || ""
              }`}
            </>
          )}
        </p>
        <p>
          {post.section.teacher && (
            <>
              {" "}
              <strong>Catedrático: </strong>
              {post.section.teacher.name}
            </>
          )}
        </p>
        <div className="flex justify-between">
          <p>
            <strong>Sección: </strong>
            {post.section.section}
          </p>
          {behavior === "card" && (
            <Link
              to={`/post`}
              onClick={() => setSelectedPost(post)}
              className="text-info-dark-3"
            >
              Ver publicación
            </Link>
          )}
        </div>

        {behavior === "default" && <div>{post.description}</div>}
      </div>
    </>
  );
};

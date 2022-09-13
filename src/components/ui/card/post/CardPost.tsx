import { Link } from "react-router-dom";
import { Avatar } from "../../..";
import { PostInterface } from "../../../../api";
import { formatDateToWords } from "../../../../utils";
import { useContentStore } from "../../../../hooks";

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
        className={`flex ${
          behavior === "default"
            ? "space-x-5 mb-5"
            : " space-x-3 md:space-x-4 lg:space-x-5 coursor"
        }`}
      >
        <Avatar user={post.user} />
        <div
          className={`flex flex-col
          space-y-1
            ${
              behavior === "default"
                ? " text-md md:text-lg lg:text-xl"
                : " text-sm lg:text-base text-left w-full font-medium"
            }`}
        >
          <h3>{post.section.course?.name}</h3>
          <p className="text-gray-100 dark:text-white">
            {`${post.user.names} ${post.user.lastnames}`}
          </p>
          <p className="dark:text-white/40">{`${postDate}`}</p>
        </div>
      </div>
      <h4
        className={`
        ${
          behavior === "default"
            ? "text-xl md:text-2xl lg:text-3xl "
            : "text-md md:text-xl lg:text-2xl "
        }
        font-bold text-center my-5`}
      >
        {post.title}
      </h4>
      <div className="flex flex-col text-xs md:text-sm lg:text-base space-y-2 dark:text-white">
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
      </div>
      {behavior === "default" && (
        <div className="w-full text-justify my-10 text-sm md:text-base lg:text-xl dark:text-white">
          {post.description}
        </div>
      )}
    </>
  );
};

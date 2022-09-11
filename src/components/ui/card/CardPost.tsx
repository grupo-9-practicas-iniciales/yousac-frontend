import { Link } from "react-router-dom";
import { Avatar } from "../../";
import { PostInterface, UserInterface } from "../../../api";

type CardPostProps = {
  post: PostInterface;
};

export const CardPost = ({ post }: CardPostProps) => {
  return (
    <Link className="cursor-pointer" to={`/post`}>
      <div className="flex space-x-3 md:space-x-4 lg:space-x-5 coursor">
        <Avatar user={post.user} />
        <div className="flex flex-col text-sm lg:text-base text-left w-full font-medium">
          <h3>{post.section.course?.name}</h3>
          <p className="text-gray-100">
            {`${post.user.names} ${post.user.lastnames}`}
          </p>
          <p>
            {``}
          </p>
        </div>
      </div>
      <h4 className="text-center text-base lg:text-lg font-semibold">
        {post.title}
      </h4>
      <div className="flex flex-col text-xs md:text-sm space-y-2 dark:text-white">
        <p>
          {" "}
          <strong>Código: </strong> {post.section.course?.code}
        </p>
        <p>
          <strong>Catedrático: </strong>
          {post.section.teacher?.names}
        </p>
        <div className="flex justify-between">
          <p>
            <strong>Sección: </strong>
            {post.section.section}
          </p>
        </div>
      </div>
    </Link>
  );
};

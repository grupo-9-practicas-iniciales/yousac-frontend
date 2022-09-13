import { CommentInterface } from "../../../../api";
import { Avatar } from "../../../";
import { getFormatDistanceToNow } from "../../../../utils";

type CardCommentProps = {
  comment: CommentInterface;
};

export const CardComment = ({ comment }: CardCommentProps) => {
  const formatedDate = getFormatDistanceToNow(Date.parse(comment.createdAt));

  return (
    <div className="flex rounded-md ring-1 ring-gray-300 p-2">
      <Avatar user={comment.user} />
      <div className="ml-2 w-full break-all">
        <div className="flex flex-col">
          <p className="font-semibold text-sm md:text-base lg:text-lg dark:text-white">
            {comment.user.names} {comment.user.lastnames}
          </p>
          <p className="text-gray-100 dark:text-gray-200 text-xs md:text-sm lg:text-base">
            {formatedDate}
          </p>
        </div>
        <p className="dark:text-white text-sm md:text-base lg:text-lg">
          {comment.message}
        </p>
      </div>
    </div>
  );
};

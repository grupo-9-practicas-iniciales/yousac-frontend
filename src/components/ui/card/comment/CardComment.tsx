import { CommentInterface } from "../../../../api";
import { Avatar } from "../../avatar/Avatar";

type CardCommentProps = {
  comment: CommentInterface;
};

export const CardComment = ({ comment }: CardCommentProps) => {
  return (
    <div className="flex">
      <Avatar user={comment.user} />
      <div className="ml-2">
        <div className="flex">
          <p className="font-semibold">
            {comment.user.names}
            {comment.user.lastnames}
          </p>
          <p className="ml-2 text-gray-500">{comment.createdAt}</p>
        </div>
        <p>{comment.message}</p>
      </div>
    </div>
  );
};

import { CommentInterface } from "../../../../api";
import { CardComment } from "../../../";

type GridCardCommentProps = {
  comments: CommentInterface[];
};
export const GridCardComment = ({ comments }: GridCardCommentProps) => {
  if (comments.length === 0) {
    return <p className="my-10 dark:text-white">No hay comentarios</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-2 w-5/ my-10">
      <h2 className="mb-5 font-semibold text-base md:text-lg lg:text-xl dark:text-white">
        Comentarios
      </h2>
      {comments.map((comment) => (
        <CardComment key={comment.idComment} comment={comment} />
      ))}
    </div>
  );
};

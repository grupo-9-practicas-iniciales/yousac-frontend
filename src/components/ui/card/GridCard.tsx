import { PostInterface, UserInterface } from "../../../api";
import { CardPost, CardUser, Card } from "../../";

type GridCardProps = {
  users: UserInterface[];
  posts: PostInterface[];
};

export const GridCard = ({ users, posts }: GridCardProps) => {
  if (users.length === 0 && posts.length === 0) {
    return (
      <>
        <h1>No se encontró información😞</h1>
      </>
    );
  } else if (users.length === 0 && posts.length > 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-6 w-5/6">
        {posts.map((post) => (
          <Card key={post.idPost}>
            <CardPost post={post} />
          </Card>
        ))}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {users.map((user) => (
        <CardUser key={user.idUser} user={user} />
      ))}
    </div>
  );
};

import { PostInterface, UserInterface } from "../../../../api";
import { CardPost, CardUser, Card } from "../../..";
import { GridCardContainer } from "./GridCardContainer";

type GridCardProps = {
  users: UserInterface[];
  posts: PostInterface[];
};

export const GridCardMain = ({ users, posts }: GridCardProps) => {
  if (users.length === 0 && posts.length === 0) {
    return (
      <>
        <h1 className="text-xl">No se encontró información 😞</h1>
      </>
    );
  } else if (users.length === 0 && posts.length > 0) {
    return (
      <GridCardContainer>
        {posts.map((post) => (
          <Card key={post.idPost}>
            <CardPost behavior="card" post={post} />
          </Card>
        ))}
      </GridCardContainer>
    );
  }
  return (
    <div className="py-10">
      {users.map((user) => (
        <Card key={user.idUser}>
          <CardUser behavior="card" user={user} />
        </Card>
      ))}
    </div>
  );
};

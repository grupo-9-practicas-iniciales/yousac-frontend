import { PostSearch, UserSearch } from "./";

interface FirstFilterProps {
  id: string;
}

export const FirstFilter = ({ id }: FirstFilterProps) => {
  if (id == "1") {
    return <UserSearch />;
  }

  if (id == "2") {
    return <PostSearch />;
  }

  return <UserSearch />;
};

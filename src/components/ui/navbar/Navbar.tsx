import { Avatar, AppLogo } from "../../";
import { UserInterface } from "../../../api";

interface NavbarProps {
  user: UserInterface;
}

export const Navbar = ({ user }: NavbarProps) => {
  return (
    <nav className="h-[10vh] flex items-center justify-around">
      <AppLogo />

      <Avatar isUserOnline={true} displayMenu={true} user={user} />
    </nav>
  );
};

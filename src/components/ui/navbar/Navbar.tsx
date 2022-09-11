import { Avatar, AppLogo } from "../../";
import { useAuthStore } from "../../../hooks";

export const Navbar = () => {
  const { user } = useAuthStore();
  return (
    <nav className="h-[10vh] flex items-center justify-around shadow-md dark:shadow-none dark:bg-darkContrast">
      <AppLogo />

      <Avatar isUserOnline={true} displayMenu={true} user={user} />
    </nav>
  );
};

import { Navigate } from "react-router-dom";

import { BsFillPencilFill } from "react-icons/bs";

import { ScrollToTop, Navbar, CardUser, Button } from "../components";
import { useContentStore } from "../hooks";

export const ProfilePage = () => {
  const { selectedUser } = useContentStore();

  if (!selectedUser) {
    return <Navigate to="/app" />;
  }

  return (
    <div className="bg-white dark:bg-dark transition-colors">
      <ScrollToTop />
      <Navbar />
      <div
        className="flex flex-col items-center mt-5 md:mt-7 p-10 md:p-16 lg:p-0 justify-center mx-auto min-h-screen w-full
        animate__animated animate__fadeIn"
      >
        <div className="max-w-2xl w-full">
          <CardUser user={selectedUser} behavior="default" />
        </div>
      </div>
    </div>
  );
};

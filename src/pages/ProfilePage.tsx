import { useContentStore } from "../hooks";
import { Navigate } from "react-router-dom";
import { ScrollToTop, Navbar, CardUser } from "../components";
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
        className="flex mt-5 md:mt-7 p-10 md:p-16 lg:p-0 justify-center mx-auto min-h-screen w-full
        animate__animated animate__fadeIn"
      >
        <div className="max-w-2xl w-full">
          <CardUser user={selectedUser} behavior="default" />
        </div>
      </div>
    </div>
  );
};

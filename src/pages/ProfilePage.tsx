import { Navigate } from "react-router-dom";

import { ScrollToTop, Navbar, CardUser, Card ,GridCardContainer, CardCourse } from "../components";
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
        className="flex flex-col justify-start items-center mt-5 md:mt-7 p-10 md:p-16 lg:p-0 min-h-screen w-full
        animate__animated animate__fadeIn"
      >
        <div className="max-w-2xl w-full">
          <CardUser user={selectedUser} behavior="default" />
          <GridCardContainer>
            {
              selectedUser.courses.map((course) => (
                <Card key={course.idCourse}>
                  <CardCourse course={course} />
                </Card>
            }

          </GridCardContainer>
        </div>
      </div>
    </div>
  );
};

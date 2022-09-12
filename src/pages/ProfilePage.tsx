import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import {
  ScrollToTop,
  Navbar,
  CardUser,
  Card,
  GridCardContainer,
  CardCourse,
} from "../components";
import { useContentStore, useApi } from "../hooks";

import { ApiGetAprovedCoursesResponse, CourseInterface } from "../api";

export const ProfilePage = () => {
  const { selectedUser } = useContentStore();

  if (!selectedUser) {
    return <Navigate to="/app" />;
  }

  const { response, perfomFetch } = useApi<ApiGetAprovedCoursesResponse>();
  const [aprovedCourses, setAprovedCourses] = useState<
    null | CourseInterface[]
  >(null);

  useEffect(() => {
    if (!aprovedCourses) {
      perfomFetch({
        method: "get",
        url: `/course/aproved/${selectedUser.idUser}`,
      });
    }
  }, [selectedUser]);

  useEffect(() => {
    if (response) {
      console.log(response);
      setAprovedCourses(response.aprovedCourses);
    }
  }, [response]);

  return (
    <div className="bg-white dark:bg-dark transition-colors">
      <ScrollToTop />
      <Navbar />
      <div
        className="flex flex-col justify-start items-center mt-5 md:mt-7 p-10 md:p-16 lg:p-0 min-h-screen w-full
        animate__animated animate__fadeIn"
      >
        <div className="max-w-2xl w-full space-y-10">
          <CardUser user={selectedUser} behavior="default" />
          <h2 className="text-3xl text-center font-semibold">
            Cursos aprobados
          </h2>

          {aprovedCourses ? (
            <GridCardContainer>
              {aprovedCourses?.map((course) => (
                <Card key={course.idCourse} className="w-full">
                  <CardCourse course={course} />
                </Card>
              ))}
            </GridCardContainer>
          ) : (
            <p>No hay cursos aprobados</p>
          )}
        </div>
      </div>
    </div>
  );
};

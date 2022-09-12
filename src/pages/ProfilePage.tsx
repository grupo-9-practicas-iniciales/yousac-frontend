import { Navigate } from "react-router-dom";

import { BsFillPencilFill } from "react-icons/bs";

import { ScrollToTop, Navbar, CardUser, Button } from "../components";
import { useContentStore } from "../hooks";
import { useApi } from '../hooks/useApi';
import { useEffect, useState } from 'react';
import { ApiGetAprovedCoursesResponse, CourseInterface } from "../api";

export const ProfilePage = () => {
  const { selectedUser } = useContentStore();

  if (!selectedUser) {
    return <Navigate to="/app" />;
  }

  const { response, perfomFetch } = useApi<ApiGetAprovedCoursesResponse>();
  const [aprovedCourses, setAprovedCourses] = useState<null | CourseInterface[]>(null)

  useEffect(() => {
    if (!aprovedCourses) {
      perfomFetch({
        method: 'get',
        url: `/course/aproved/${selectedUser.idUser}`
      });
    }
  }, [selectedUser])

  useEffect(() => {
    if (response) {
      console.log(response)
      setAprovedCourses(response.aprovedCourses)
    }
  }, [response])

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

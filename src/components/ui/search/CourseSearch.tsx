import { useEffect, useState } from "react";

import { Form, Formik } from "formik";
import { SearchIcon } from "../../../assets";
import { TextField, Button, Select } from "../../";
import { SelectOptionsInterface } from "../select/Select.types";

import { useApi, useContentStore } from "../../../hooks";
import {
  ApiSearchCourseResponse,
  SearchCourseInterface,
} from "../../../api/api.types";

const formInitialState = {
  name: "",
};

type FormState = typeof formInitialState;

export const CourseSearch = () => {
  const { setIsLoading } = useContentStore();
  const { isLoading, response, perfomFetch } =
    useApi<ApiSearchCourseResponse>();

  const [coursesFound, setCoursesFound] = useState<
    SearchCourseInterface[] | null
  >(null);

  useEffect(() => {
    if (isLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [isLoading]);

  useEffect(() => {
    if (response) {
      setCoursesFound(response.courses);
    }
  }, [response]);

  const onSubmit = ({ name }: FormState) => {
    perfomFetch({
      url: `/search?param=course`,
      method: "post",
      body: {
        name,
      },
    });
  };

  return (
    <>
      <Formik initialValues={formInitialState} onSubmit={onSubmit}>
        <Form className="flex w-full">
          <div className="flex my-3 gap-x-2  w-full">
            <TextField placeholder="Nombre curso" type="search" name="name" />
            <Button
              type="submit"
              className="w-1/6 flex justify-center items-center"
            >
              <SearchIcon />
            </Button>
          </div>
        </Form>
      </Formik>
      {coursesFound && coursesFound.length > 0 && (
        <CourseSelects foundedCourses={coursesFound} />
      )}
    </>
  );
};

interface CourseSelectsProps {
  foundedCourses: SearchCourseInterface[] | null;
}

const CourseSelects = ({ foundedCourses }: CourseSelectsProps) => {
  const { setSelectIdSection } = useContentStore();

  const courseOptions: SelectOptionsInterface[] = foundedCourses!.map(
    (course) => {
      return {
        displayName: course.name,
        id: course.idCourse + "",
      };
    }
  );
  const [selectedCourse, setSelectedCourse] = useState<SelectOptionsInterface>(
    courseOptions[0]
  );

  const selectedCourseObject = foundedCourses!.filter(
    (course) => course.idCourse + "" === selectedCourse.id
  )[0];

  const selectOptions: SelectOptionsInterface[] =
    selectedCourseObject.sections.map((section) => {
      return {
        displayName: section.section,
        id: section.idSection + "",
      };
    });

  const [selectedSection, setSelectedSection] =
    useState<SelectOptionsInterface>(selectOptions[0]);

  useEffect(() => {
    setSelectIdSection(selectedSection.id);
  }, [selectedSection]);

  useEffect(() => {
    const selectedCourseObject = foundedCourses!.filter(
      (course) => course.idCourse + "" === selectedCourse.id
    )[0];

    const selectOptions: SelectOptionsInterface[] =
      selectedCourseObject.sections.map((section) => {
        return {
          displayName: section.section,
          id: section.idSection + "",
        };
      });

    setSelectedSection(selectOptions[0]);
  }, [selectedCourse]);

  return (
    <div className="grid grid-cols-2 w-full gap-x-2">
      <Select
        selected={selectedCourse}
        setSelected={setSelectedCourse}
        options={courseOptions}
      />
      <Select
        selected={selectedSection}
        setSelected={setSelectedSection}
        options={selectOptions}
      />
    </div>
  );
};

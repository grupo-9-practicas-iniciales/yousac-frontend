import { useEffect, useState } from "react";
import { Form, Formik } from "formik";

import { SearchIcon } from "../../../assets";
import { useContentStore, useApi } from "../../../hooks";
import { TextField, Button } from "../../";
import { SelectOptionsInterface } from "../select/Select.types";
import { Select } from "../select/Select";
import {
  ApiSearchTeacherResponse,
  SearchTeacherInterface,
} from "../../../api/api.types";

const formInitialState = {
  name: "",
};

type FormState = typeof formInitialState;

export const TeacherSearch = () => {
  const { setIsLoading } = useContentStore();
  const { isLoading, response, perfomFetch } =
    useApi<ApiSearchTeacherResponse>();

  const [teachersFound, setTeachersFound] = useState<
    SearchTeacherInterface[] | null
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
      setTeachersFound(response.teachers);
    }
  }, [response]);

  const onSubmit = ({ name }: FormState) => {
    setTeachersFound(null);
    perfomFetch({
      url: `/search?param=teacher`,
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
            <TextField
              placeholder="Nombre catedratico"
              type="search"
              name="name"
            />
            <Button
              type="submit"
              className="w-1/6 flex justify-center items-center"
            >
              <SearchIcon />
            </Button>
          </div>
        </Form>
      </Formik>
      {teachersFound && teachersFound.length > 0 && (
        <TeacherSelects foundedTeachers={teachersFound} />
      )}
    </>
  );
};

interface TeacherSelectsProps {
  foundedTeachers: SearchTeacherInterface[] | null;
}

const TeacherSelects = ({ foundedTeachers }: TeacherSelectsProps) => {
  const { setSelectIdSection } = useContentStore();

  const teacherOptions: SelectOptionsInterface[] = foundedTeachers!.map(
    (teacher) => {
      return {
        displayName: teacher.name,
        id: teacher.idTeacher + "",
      };
    }
  );
  const [selectedTeacher, setSelectedTeacher] =
    useState<SelectOptionsInterface>(teacherOptions[0]);

  const selectedTeacherObject = foundedTeachers!.filter(
    (teacher) => teacher.idTeacher + "" === selectedTeacher.id
  )[0];

  const selectOptions: SelectOptionsInterface[] =
    selectedTeacherObject.sections.map((section) => {
      let courseName = "";

      if (section.course) {
        courseName = section.course.name + ": ";
      }

      return {
        displayName: courseName + section.section,
        id: section.idSection + "",
      };
    });

  const [selectedSection, setSelectedSection] =
    useState<SelectOptionsInterface>(selectOptions[0]);

  useEffect(() => {
    setSelectIdSection(selectedSection.id);
  }, [selectedSection]);

  useEffect(() => {
    const selectedTeacherObject = foundedTeachers!.filter(
      (teacher) => teacher.idTeacher + "" === selectedTeacher.id
    )[0];

    const selectOptions: SelectOptionsInterface[] =
      selectedTeacherObject.sections.map((section) => {
        let courseName = "";

        if (section.course) {
          courseName = section.course.name + " ";
        }

        return {
          displayName: courseName + section.section,
          id: section.idSection + "",
        };
      });

    setSelectedSection(selectOptions[0]);
  }, [selectedTeacher]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-2">
      <Select
        selected={selectedTeacher}
        setSelected={setSelectedTeacher}
        options={teacherOptions}
      />
      <Select
        selected={selectedSection}
        setSelected={setSelectedSection}
        options={selectOptions}
      />
    </div>
  );
};

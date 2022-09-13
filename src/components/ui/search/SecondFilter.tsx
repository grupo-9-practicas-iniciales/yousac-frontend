import { CourseSearch, SearchLatest, TeacherSearch } from "./";

interface SecondFilterProps {
  id: string;
}

export const SecondFilter = ({ id }: SecondFilterProps) => {
  if (id == "1") {
    return <CourseSearch />;
  }

  if (id == "2") {
    return <TeacherSearch />;
  }

  if (id == "3") {
    return <SearchLatest />;
  }

  return <CourseSearch />;
};

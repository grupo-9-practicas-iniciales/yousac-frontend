import { SearchCourseInterface } from "../../../../api";

type CardCourseProps = {
  course: SearchCourseInterface;
};

export const CardCourse = ({ course }: CardCourseProps) => {
  return (
    <>
      <div>
        {`
          ${course.code} - ${course.name} - 7 créditos
          `}
      </div>
    </>
  );
};

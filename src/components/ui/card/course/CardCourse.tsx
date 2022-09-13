import { CourseInterface } from "../../../../api";

type CardCourseProps = {
  course: CourseInterface;
};

export const CardCourse = ({ course }: CardCourseProps) => {
  return (
    <>
      <div>
        {`
          ${course.code} - ${course.name} - ${course.credits} créditos
          `}
      </div>
    </>
  );
};

import { CourseInterface } from "../../../../api";

type CardCourseProps = {
  course: CourseInterface;
};

export const CardCourse = ({ course }: CardCourseProps) => {
  return (
    <>
      <div className="dark:text-white">
        {`
          ${course.code} - ${course.name} - ${course.credits} créditos
          `}
      </div>
    </>
  );
};

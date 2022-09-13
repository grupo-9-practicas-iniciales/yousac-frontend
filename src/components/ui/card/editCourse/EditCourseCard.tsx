
import { CourseInterface } from "../../../../api";
import { Button } from "../../button/Button";

type CardCourseProps = {
    course: CourseInterface;
    type: "aproved" | "unaproved";
    onClick: (course: CourseInterface) => void;
};


export const EditCourseCard = ({ course, type, onClick }: CardCourseProps) => {
    return (
        <div
            className={
                ` flex my-2 dark:text-white items-center gap-x-2 justify-between border border-gray-400 bg-white dark:border-none dark:bg-darkContrast/100 min-w-min p-5 rounded-md transition md:duration-300  md:hover:scale-105 md:hover:shadow-lg`
            }
        >
            <div className="text-center">
                <p>{`${course.code}`}</p>
                <p>{`${course.name}`}</p>
            </div>
            {
                type === "unaproved"
                    ? (

                        <Button className="w-1/3" variant="primary" onClick={() => onClick(course)}>+</Button>
                    )
                    : (

                        <Button className="w-1/3" variant="tertiary" onClick={() => onClick(course)}>-</Button>
                    )
            }
        </div>
    )
}

import { CourseSearch } from "./CourseSearch";
import { SearchLatest } from "./SearchLatest";
import { TeacherSearch } from "./TeacherSearch";

interface SecondFilterProps {
    id: string;
}

export const SecondFilter = ({ id }: SecondFilterProps) => {
    if (id == '1') {
        return <CourseSearch />
    }

    if (id == '2') {

        return <TeacherSearch />
    }

    if (id == '3') {
        return <SearchLatest />
    }

    return <CourseSearch />
}

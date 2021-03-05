import { useMenuContext } from "../contexts/menuContext";
import { useSearchContext } from "../contexts/searchContext";
import { useCourseContext } from "../contexts/CourseContext";
import { ICourse } from "../contexts/courseState";

import Card from "./Card";

const Overview = () => {
  const { searchState } = useSearchContext();
  const { courseState } = useCourseContext();
  const filterCourse = (course: ICourse) => {
    return (
      course.taken &&
      course.title.toLowerCase().includes(searchState.word.toLowerCase())
    );
  };
  return (
    <div>
      {courseState.filter(filterCourse).map((course, index) => (
        <Card course={course} key={index} />
      ))}
    </div>
  );
};

const FindCourses = () => {
  const { searchState } = useSearchContext();
  const { courseState } = useCourseContext();

  const filterCourse = (course: ICourse) => {
    return course.title.toLowerCase().includes(searchState.word.toLowerCase());
  };

  return (
    <div>
      {courseState.filter(filterCourse).map((course, index) => (
        <Card course={course} key={index} />
      ))}
    </div>
  );
};

const Bookmark = () => {
  const { searchState } = useSearchContext();
  const { courseState } = useCourseContext();

  const filterCourse = (course: ICourse) => {
    return (
      course.bookmarked &&
      course.title.toLowerCase().includes(searchState.word.toLowerCase())
    );
  };

  return (
    <div>
      {courseState.filter(filterCourse).map((course, index) => (
        <Card course={course} key={index} />
      ))}
    </div>
  );
};
const CardContainer = () => {
  const { menu } = useMenuContext();

  const getComponent = (current: number) => {
    switch (current) {
      case 0:
        return <Overview />;
      case 1:
        return <FindCourses />;
      case 2:
        return <Bookmark />;
      default:
        return <></>;
    }
  };
  return <>{getComponent(menu.current)}</>;
};

export default CardContainer;

import { useMenuContext } from "../contexts/menuContext";
import { useCourseContext } from "../contexts/CourseContext";
import { ICourse } from "../contexts/courseState";

import { AiOutlineClose as Close } from "react-icons/ai";
import { BsFillBookmarkFill as Bookmark } from "react-icons/bs";

const CardImage = () => {
  return <div className="h-full w-52 bg-gray-400 flex-none rounded-xl" />;
};

const Card = ({ course }: { course: ICourse }) => {
  const { menu } = useMenuContext();
  const { courseDispatch } = useCourseContext();
  const getIcon = () => {
    if (menu.current === 0) {
      return (
        <Close
          className="text-xl hover:text-gray-800"
          onClick={() =>
            courseDispatch({ type: "REMOVE_TAKEN", payload: { id: course.id } })
          }
        />
      );
    } else {
      return (
        <Bookmark
          className={`text-xl ${
            course.bookmarked ? "text-yellow-500" : "text-yellow-200"
          }`}
          onClick={() =>
            courseDispatch({
              type: "TOGGLE_BOOKMARK",
              payload: { id: course.id },
            })
          }
        />
      );
    }
  };

  return (
    <div className="h-52 p-4 mb-4 rounded-xl shadow-xl flex items-start justify-center cursor-pointer hover:bg-gray-100 transition-colors">
      <CardImage />
      <div className="pl-4 flex-auto">
        <div className="flex justify-between items-center">
          <h4 className="capitalize">{course.category}</h4>
          {getIcon()}
        </div>
        <h2 className="font-bold text-lg">{course.title}</h2>
        <p className="text-sm">{course.description}</p>
        <div
          style={{ marginTop: "1rem" }}
          className="flex justify-between items-center mt-auto"
        >
          <h6>
            {course.teacher} - {course.duration} minutes
          </h6>
          {menu.current === 0 ? (
            <h6>
              Progress: {course.completed ? "Completed" : course.progress + "%"}
            </h6>
          ) : (
            <button
              className={`${
                course.taken
                  ? "bg-gray-500 rounded-md"
                  : "bg-blue-500 cursor-pointer rounded-md"
              } text-white text-sm p-2 "`}
              onClick={() =>
                courseDispatch({
                  type: "ADD_TAKEN",
                  payload: { id: course.id },
                })
              }
            >
              {course.taken ? "Added" : "Add"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

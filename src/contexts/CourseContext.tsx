import {
  createContext,
  useContext,
  Dispatch,
  ReactNode,
  useReducer,
} from "react";
import { Courses, ICourse } from "./courseState";

type IActions =
  | { type: "TOGGLE_BOOKMARK"; payload: { id: number } }
  | { type: "SET_COMPLETE"; payload: { id: number } }
  | { type: "ADD_TAKEN"; payload: { id: number } }
  | { type: "REMOVE_TAKEN"; payload: { id: number } };

export type IProps = {
  courseState: ICourse[];
  courseDispatch: Dispatch<IActions>;
};

const CourseReducer = (state: ICourse[], action: IActions): ICourse[] => {
  let newState: ICourse[] = [];
  switch (action.type) {
    case "TOGGLE_BOOKMARK":
      newState = [...state];
      newState[action.payload.id].bookmarked = !state[action.payload.id]
        .bookmarked;
      return newState;

    case "ADD_TAKEN":
      newState = [...state];
      newState[action.payload.id].taken = true;
      newState[action.payload.id].progress = 0;
      newState[action.payload.id].completed = false;
      return newState;

    case "REMOVE_TAKEN":
      newState = [...state];
      newState[action.payload.id].taken = false;
      return newState;

    default:
      return state;
  }
};

const CourseContext = createContext<IProps | undefined>(undefined);

const CourseProvider = ({ children }: { children: ReactNode }) => {
  const [courseState, courseDispatch] = useReducer(CourseReducer, Courses);
  return (
    <CourseContext.Provider value={{ courseState, courseDispatch }}>
      {children}
    </CourseContext.Provider>
  );
};

const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error("useCourseContext must be used within a GlobalProvider");
  }

  return context;
};

export { useCourseContext, CourseProvider };

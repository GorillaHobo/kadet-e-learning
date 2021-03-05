import {
  createContext,
  useContext,
  Dispatch,
  ReactNode,
  useReducer,
} from "react";
import { categories } from "./courseState";

interface ISort {
  word: string;
  category: categories;
}
type IActions =
  | { type: "SORT_WORD"; payload: string }
  | { type: "SORT_CATEGORY"; payload: categories }
  | { type: "RESET" };

const initialSort: ISort = {
  word: "",
  category: "",
};

const searchReducer = (state: ISort, action: IActions) => {
  switch (action.type) {
    case "SORT_WORD":
      return { ...state, word: action.payload };
    case "RESET":
      return { ...initialSort };
    default:
      return state;
  }
};

type IProps = {
  searchState: ISort;
  searchDispatch: Dispatch<IActions>;
};

const SearchContext = createContext<IProps | undefined>(undefined);

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchState, searchDispatch] = useReducer(searchReducer, initialSort);
  return (
    <SearchContext.Provider value={{ searchState, searchDispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearchContext must be used within a GlobalProvider");
  }
  return context;
};

export { useSearchContext, SearchProvider };

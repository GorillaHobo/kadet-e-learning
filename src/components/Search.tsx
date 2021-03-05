import { useSearchContext } from "../contexts/searchContext";

const Search = () => {
  const { searchState, searchDispatch } = useSearchContext();

  return (
    <div className="p-2 pl-4 border-2 w-42 border-gray-700 rounded-full bg-none">
      <input
        placeholder="Search title..."
        value={searchState.word}
        onChange={(e) =>
          searchDispatch({ type: "SORT_WORD", payload: e.target.value })
        }
        className="focus:outline-none"
      />
    </div>
  );
};

export default Search;

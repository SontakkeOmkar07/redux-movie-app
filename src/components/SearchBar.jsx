import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../features/movies/movieSlice";

const SearchBar = () => {


  const  {search} = useSelector((state) => state.movies);

  const dispatch = useDispatch();


  const handleSearchChange = (e) => {

    dispatch(searchMovies(e.target.value));
  }


  return (
    <div className="w-full">
      <input
        type="text"
        onChange={handleSearchChange}
        value={search}
        placeholder="Search movies..."
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
      />
    </div>
  );
};

export default SearchBar;
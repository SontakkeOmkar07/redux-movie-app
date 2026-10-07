import { useDispatch, useSelector } from "react-redux";
import { filterMovies } from "../../features/filters/filterSlice";

const GenreFilter = () => {

  const dispatch = useDispatch();

  const {filterMovieGenre} = useSelector((state) => state.filters)


  const handleChangeGenre = (e) => {

    dispatch(filterMovies(e.target.value))


  }


  return (
    <select
      onChange={handleChangeGenre}
      value={filterMovieGenre}
      className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
    >
      <option value="All">All Genres</option>
      <option value="Action">Action</option>
      <option value="Sci-Fi">Sci-Fi</option>
      <option value="Comedy">Comedy</option>
      <option value="Drama">Drama</option>
      <option value="Thriller">Thriller</option>
      <option value="Animation">Animation</option>
      <option value="Adventure">Adventure</option>
    </select>
  );
};

export default GenreFilter;
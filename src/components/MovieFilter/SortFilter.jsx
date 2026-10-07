import { useDispatch, useSelector } from "react-redux";
import { sortMovies } from "../../features/filters/filterSlice";

const SortFilter = () => {

  const {sortMovie} = useSelector((state) => state.filters)

  const dispatch = useDispatch();


  const handleSortChange = (e) => {

    dispatch(sortMovies(e.target.value))

  }
  return (
    <select
      className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
onChange={handleSortChange}
      value={sortMovie}
    >
      <option value="default">Default</option>
      <option value="rating-high">Rating: High to Low</option>
      <option value="rating-low">Rating: Low to High</option>
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
    </select>
  );
};

export default SortFilter;
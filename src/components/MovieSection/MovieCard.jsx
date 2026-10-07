import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addWatchList } from "../../features/watchlist/watchlistSlice";

const MovieCard = ({ movie }) => {

    const dispatch = useDispatch();


    const handleAddWatchList = (movie) => {

        dispatch(addWatchList(movie))

    }
    
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[2/3] overflow-hidden bg-slate-200">
        <img
          src={movie.image}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <div className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
          ⭐ {movie.rating}
        </div>
      </div>

      <div className="p-4">
        <h3 className="truncate text-lg font-bold text-slate-900">
          {movie.title}
        </h3>

        <div className="mt-2 flex items-center justify-between text-sm text-slate-500">
          <span>{movie.genre}</span>
          <span>{movie.year}</span>
        </div>

        <p className="mt-1 text-sm text-slate-500">{movie.duration}</p>

        <div className="mt-4 flex gap-2">
          <button onClick={() => handleAddWatchList(movie)}  className="flex-1 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
            Add to WatchList
          </button>

          <Link
            to={`/movie/${movie.id}`}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
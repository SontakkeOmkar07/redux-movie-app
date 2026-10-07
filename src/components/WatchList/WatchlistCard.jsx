import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWatchList } from "../../features/watchlist/watchlistSlice";

const WatchlistCard = ({ watchList }) => {

    const dispatch = useDispatch();

    const handleRemove = (watchListId) => {
        dispatch(removeFromWatchList(watchListId));

    } 
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:flex-row">
      <img
        src={watchList.image}
        alt={watchList.title}
        className="h-64 w-full object-cover sm:h-40 sm:w-28"
      />

      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{watchList.title}</h3>

          <p className="mt-1 text-sm text-slate-500">
            {watchList.genre} • {watchList.year}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            ⭐ {watchList.rating} • {watchList.duration}
          </p>
        </div>

        <div className="mt-4 flex gap-2">
          <Link
            to={`/movie/${watchList.id}`}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Details
          </Link>

          <button onClick={() => handleRemove(watchList.id)} className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchlistCard;
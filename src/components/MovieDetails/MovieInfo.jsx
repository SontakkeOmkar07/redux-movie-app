const MovieInfo = ({ movie }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <div className="rounded-xl bg-slate-100 p-4">
        <p className="text-xs font-medium text-slate-500">Genre</p>
        <p className="mt-1 font-semibold text-slate-900">{movie.genre}</p>
      </div>

      <div className="rounded-xl bg-slate-100 p-4">
        <p className="text-xs font-medium text-slate-500">Rating</p>
        <p className="mt-1 font-semibold text-slate-900">
          ⭐ {movie.rating}
        </p>
      </div>

      <div className="rounded-xl bg-slate-100 p-4">
        <p className="text-xs font-medium text-slate-500">Year</p>
        <p className="mt-1 font-semibold text-slate-900">{movie.year}</p>
      </div>

      <div className="rounded-xl bg-slate-100 p-4">
        <p className="text-xs font-medium text-slate-500">Duration</p>
        <p className="mt-1 font-semibold text-slate-900">
          {movie.duration}
        </p>
      </div>
    </div>
  );
};

export default MovieInfo;
import MovieInfo from "../MovieDetails/MOvieInfo";

const MovieDetails = ({ movie }) => {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
      <div className="grid md:grid-cols-[320px_1fr]">
        <div className="bg-slate-200">
          <img
            src={movie.image}
            alt={movie.title}
            className="h-full min-h-[450px] w-full object-cover"
          />
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Movie Details
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            {movie.title}
          </h1>

          <p className="mt-6 leading-7 text-slate-600">
            {movie.description}
          </p>

          <div className="mt-8">
            <MovieInfo movie={movie} />
          </div>

          <button className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
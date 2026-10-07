import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import EmptyState from "../components/Common/EmptyState";
import movies from "../data/movies";

const MovieDetailsPage = () => {
  const { id } = useParams();

  const movie = movies.find((movie) => movie.id === Number(id));

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="mb-6 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-700"
        >
          ← Back to Movies
        </Link>

        {movie ? (
          <MovieDetails movie={movie} />
        ) : (
          <EmptyState
            title="Movie Not Found"
            message="The movie you are looking for does not exist."
          />
        )}
      </main>
    </div>
  );
};

export default MovieDetailsPage;
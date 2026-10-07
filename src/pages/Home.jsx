import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/MovieFilter/GenreFilter";
import SortFilter from "../components/MovieFilter/SortFilter";
import MovieGrid from "../components/MovieSection/MovieGrid";
import { useSelector } from "react-redux";

const Home = () => {


  const { filterMoviesGenre, sortMovie } = useSelector((state) => state.filters);
  const { movies, search } = useSelector((state) => state.movies);


  const genreMovies =
    filterMoviesGenre === "All"
      ? movies
      : movies.filter((movie) => movie.genre === filterMoviesGenre);

  const filterMovie = genreMovies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  if (sortMovie === "rating-high") {

    filterMovie.sort((a, b) => b.rating - a.rating);
    
  } else if (sortMovie === "rating-low") {


    filterMovie.sort((a, b) => a.rating - b.rating);

  }
  else if (sortMovie === "newest") {

    filterMovie.sort((a, b) => b.year - a.year);


  }
  else if (sortMovie === "oldest") {

    filterMovie.sort((a, b) => a.year - b.year);
  }
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Explore Movies
          </h1>

          <p className="mt-2 text-slate-500">
            Discover movies and build your personal watchlist.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-3 lg:flex-row">
          <div className="flex-1">
            <SearchBar />
          </div>

          <GenreFilter />
          <SortFilter />
        </div>

        <MovieGrid movies={filterMovie} />
      </main>
    </div>
  );
};

export default Home;
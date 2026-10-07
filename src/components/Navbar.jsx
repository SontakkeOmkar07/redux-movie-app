import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {

  const { watchLists } = useSelector((state) => state.watchLists);


  return (
    <nav className="border-b border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-bold">
          Movie Explorer
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/watchlist"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Watchlist
          </Link>

          <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold">
            {watchLists.length}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
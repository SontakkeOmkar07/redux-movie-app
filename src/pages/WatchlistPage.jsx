import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Watchlist from "../components/WatchList/Watchlist";

const WatchlistPage = () => {

            const {watchLists} = useSelector((state) => state.watchLists);

            console.log(watchLists);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            My WatchList
          </h1>

          <p className="mt-2 text-slate-500">
            Movies you want to watch later.
          </p>
        </div>

        <Watchlist watchLists={watchLists} />
      </main>
    </div>
  );
};

export default WatchlistPage;
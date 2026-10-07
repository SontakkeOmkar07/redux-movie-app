import WatchlistCard from "./WatchlistCard";
import EmptyState from "../Common/EmptyState";

const Watchlist = ({watchLists}) => {


  return (
    <div>
      {watchLists.length === 0 ? (
        <EmptyState
          title="Your Watchlist is Empty"
          message="Add movies to your watchlist and they will appear here."
        />
      ) : (
        <div className="space-y-4">
          {watchLists.map((watchList) => (
            <WatchlistCard key={watchList.id} watchList={watchList} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
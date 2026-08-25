import { Link } from "react-router-dom";
import { useWatchlist } from "../Context/WatchlistContext";
import styles from "./Watchlist.module.css";

const WatchlistPage = () => {
  const { watchlist, removeFromWatchlist } = useWatchlist();

  if (watchlist.length === 0) {
    return <p className={styles.empty}>Aapki watchlist khali hai.</p>;
  }

  return (
    <div className={styles.container}>
      <h1>My Watchlist</h1>
      <div className={styles.grid}>
        {watchlist.map((movie) => (
          <div key={movie.id} className={styles.card}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
              <p className={styles.title}>{movie.title}</p>
            </Link>
            <p className={styles.rating}>
              ⭐ {movie.vote_average?.toFixed(1)}
            </p>
            <button onClick={() => removeFromWatchlist(movie.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchlistPage;
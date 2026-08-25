import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import { useWatchlist } from "../Context/WatchlistContext";

const MovieDetails = () => {
  const [movies, setMovies] = useState();
  const { id } = useParams();
  const [trailerKey, setTrailerKey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const inWatchlist = movies && isInWatchlist(movies.id);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiKey = "f37cb3ad34b4e90a4f2a93970fd92d21";
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
        const castURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.id) {
          setMovies(data);
        } else {
          setError(data.error || "No Movie Found");
        }

        const videosUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;
        const videoRes = await fetch(videosUrl);
        const videoData = await videoRes.json();
        const trailer = videoData.results.find(
          (v) => v.type === "Trailer" && v.site === "YouTube",
        );
        if (trailer) {
          setTrailerKey(trailer.key);
        } else {
          setError("There is some issue");
        }

        const response = await fetch(castURL);
        const Cast = await response.json();
        if (Cast.cast) {
          setCast(Cast.cast);
        } else {
          setError("Error");
        }
      } catch (err) {
        setError("Something Went Wrong,Try Again");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleWatchlistToggle = () => {
    if (inWatchlist) {
      removeFromWatchlist(movies.id);
    } else {
      addToWatchlist({
        id: movies.id,
        title: movies.title,
        poster_path: movies.poster_path,
        release_date: movies.release_date,
        vote_average: movies.vote_average,
      });
    }
  };

  if (loading) {
    return <p>Loading Movie...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className={styles.card}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
          alt="Movie Poster"
          className={styles.poster}
        />
        <div className={styles.info}>
          <p className={styles.title}>{movies.title}</p>
          <p className={styles.subInfo}>
            {movies.release_date} &middot; {movies.runtime} min
          </p>
          <p className={styles.rating}>
            ⭐ {movies.vote_average.toFixed(1)} /10
          </p>

          <button className={styles.watchlistBtn} onClick={handleWatchlistToggle}>
            {inWatchlist ? "− Remove from Watchlist" : "+ Add to Watchlist"}
          </button>

          <div className={styles.trailerSection}>
            {trailerKey && (
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="Movie Trailer"
                allowFullScreen
              />
            )}
          </div>
          <div className={styles.castSection}>
            <h2>Cast</h2>
            <div className={styles.castCards}>
              {cast.map((actor) => (
                <div key={actor.id} className={styles.castCard}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={actor.name}
                  />
                  <h3>{actor.name}</h3>
                  <p>{actor.character}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieDetails;
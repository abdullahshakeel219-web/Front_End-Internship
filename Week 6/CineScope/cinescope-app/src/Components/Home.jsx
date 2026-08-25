import styles from "./Home.module.css";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [topRated, setTopRated] = useState([]);

  const trendingRef = useRef(null);
  const topRatedRef = useRef(null);

  // Trending Movies
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      const apiKey = "f37cb3ad34b4e90a4f2a93970fd92d21";

      const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.results) {
          setMovies(data.results);
        } else {
          setMovies([]);
          setError("There Is Some Problem, Try After Sometime");
        }
      } catch (err) {
        setError("There is Some Error Occured");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Featured Movie Auto Change
  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);

  // Top Rated Movies
  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const apiKey = "f37cb3ad34b4e90a4f2a93970fd92d21";

      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.results) {
          setTopRated(data.results);
        } else {
          setError("There is some issue");
        }
      } catch (err) {
        setError("There is some error occured");
      }
    };

    fetchTopRatedMovies();
  }, []);

  // Slider Left
  const slideLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -600,
        behavior: "smooth",
      });
    }
  };

  // Slider Right
  const slideRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: 600,
        behavior: "smooth",
      });
    }
  };

  const featuredMovie = movies[featuredIndex];

  return (
    <>
      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className={styles.page}>

          {/* Featured Movie */}

          <div className={styles.featuredMovie}>

            <img
              src={`https://image.tmdb.org/t/p/w1280${featuredMovie?.backdrop_path}`}
              alt={featuredMovie?.title}
              className={styles.featuredPoster}
            />

            {/* Normal Div Overlay */}
            <div className={styles.overlay}></div>

            <div className={styles.featuredInfo}>
              <h2>{featuredMovie?.title}</h2>

              <span>
                ⭐ {featuredMovie?.vote_average?.toFixed(1)}
              </span>
            </div>

          </div>


          {/* Trending */}

          <div className={styles.trending}>

            <h3>Trending</h3>

            <div className={styles.sliderWrapper}>

              <button
                className={styles.arrow}
                onClick={() => slideLeft(trendingRef)}
              >
                ❮
              </button>

              <div
                className={styles.trendingCards}
                ref={trendingRef}
              >

                {movies.map((m) => (
                  <div
                    key={m.id}
                    className={styles.cards}
                  >

                    <Link to={`/movies/${m.id}`}>

                      <img
                        src={`https://image.tmdb.org/t/p/w200${m.poster_path}`}
                        alt={m.title}
                      />

                      <p>{m.title}</p>

                    </Link>

                  </div>
                ))}

              </div>

              <button
                className={styles.arrow}
                onClick={() => slideRight(trendingRef)}
              >
                ❯
              </button>

            </div>

          </div>


          {/* Top Rated */}

          <div className={styles.trending}>

            <h3>Top Rated</h3>

            <div className={styles.sliderWrapper}>

              <button
                className={styles.arrow}
                onClick={() => slideLeft(topRatedRef)}
              >
                ❮
              </button>

              <div
                className={styles.trendingCards}
                ref={topRatedRef}
              >

                {topRated.map((m) => (
                  <div
                    key={m.id}
                    className={styles.cards}
                  >

                    <Link to={`/movies/${m.id}`}>

                      <img
                        src={`https://image.tmdb.org/t/p/w200${m.poster_path}`}
                        alt={m.title}
                      />

                      <p>{m.title}</p>

                      <span className={styles.movieRating}>
                        ⭐ {m.vote_average?.toFixed(1)} / 10
                      </span>

                    </Link>

                  </div>
                ))}

              </div>

              <button
                className={styles.arrow}
                onClick={() => slideRight(topRatedRef)}
              >
                ❯
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default Home;
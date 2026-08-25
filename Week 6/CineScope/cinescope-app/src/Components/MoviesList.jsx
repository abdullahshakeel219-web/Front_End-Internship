import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import styles from './MoviesList.module.css';

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [SearchParams] = useSearchParams();
    const querySearch = SearchParams.get('search');

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true);
            setError(null);
            try {
                const apikey = "f37cb3ad34b4e90a4f2a93970fd92d21";
                let specificMovieurl = `https://api.themoviedb.org/3/search/movie?query=${querySearch}&api_key=${apikey}`;
                let randomMovieurl = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;
                let url = querySearch ? specificMovieurl : randomMovieurl;
                const res = await fetch(url);
                const data = await res.json();
                if (data.results) {
                    setMovies(data.results);
                } else {
                    setMovies([]);
                    setError(data.Error || "No Movie Found");
                }
            } catch (err) {
                setError("Something Went Wrong,Try Again");
            } finally {
                setLoading(false);
            }
        };
        fetchMovie();
    }, [querySearch]);

    return (
        <>
            {loading && <p>Loading Movies...</p>}
            {error && <p>{error}</p>}

            {!loading && !error && (
                <div className={styles.moviecards}>
                    {movies.map((m) => (
                        <div className={styles.card} key={m.id}>
                            <Link to={`/movies/${m.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${m.poster_path}`}
                                    alt={m.title}
                                    width="70px"
                                    height="90px"
                                />
                                <span>{m.title}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};
export default MoviesList;
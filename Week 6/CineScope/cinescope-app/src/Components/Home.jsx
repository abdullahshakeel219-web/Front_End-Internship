import styles from './Home.module.css'
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';


const Home=()=>{
    const [movies,setMovies]=useState([]);
   const [loading,setLoading]=useState(true);
   const [error,setError]=useState(null);   
    const [featuredIndex,setFeaturedIndex]=useState(0);
    const [topRated,setTopRated]=useState([]);

    useEffect(()=>{
       const fetchMovies=async()=>{
        setLoading(true);
        setError(null);
     const apiKey='f37cb3ad34b4e90a4f2a93970fd92d21';
     const url=`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
     try {
        const res=await fetch(url);
        const data=await res.json();
        console.log(data);
        if(data.results){
            setMovies(data.results);
        }
        else{
            setMovies([]);
            setError("There Is Some Problem,Try After Sometime");
        }
     } catch (err) {
        setError("There is Some Error Occured"+err);
     }
     finally{
        setLoading(false);
     }
       }
       fetchMovies();
    },[])

      useEffect(()=>{
        const interval=setInterval(()=>{
            setFeaturedIndex((prev)=>(prev+1)%movies.length);
        },5000)

        return ()=>clearInterval(interval);
    },[movies]);

    useEffect(()=>{
        const fetchTopRatedMovies=async()=>{
            setLoading(true);
            setError(null);
              const apiKey='f37cb3ad34b4e90a4f2a93970fd92d21';
     const url=`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
     try {
        const res=await fetch(url);
        const data=await res.json();
        if(data.results){
            setTopRated(data.results);
        }
        else{
            setError("There is some issue");
        }
     } catch (error) {
        setError("There is some error occured "+error);
     }
     finally{
        setLoading(false);
     }
        }
        fetchTopRatedMovies();
    },[])

    const featuredMovie=movies[featuredIndex];
    return (
<>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && (
            <>
            

        <div className={styles.page}>
       <div className={styles.featuredMovie}>
        <img  src={`https://image.tmdb.org/t/p/w1280${featuredMovie?.backdrop_path}`}
  alt={featuredMovie?.title} className={styles.featuredPoster}/>
    <div className={styles.featuredInfo}>
        <h2>{featuredMovie?.title}</h2>
        <span>⭐ {featuredMovie?.vote_average?.toFixed(1)}</span>
    </div>
       </div>
        <div className={styles.trending}>
            <h3>Trending</h3>
            <div className={styles.trendingCards}>
            {movies.map((m)=>(
                <div key={m.id} className={styles.cards}>
                 <Link to={`/movies/${m.id}`} >
                 <img src={`https://image.tmdb.org/t/p/w200${m.poster_path}`} />  
                  {m.title}
                </Link>
                </div> 
            ))}
            </div>
        </div>
        <div className={styles.trending}>
            <h3>Top-rated</h3>
            <div className={styles.trendingCards}>
                {topRated.map((m)=>(
                    <div key={m.id} className={styles.cards}>
                        <Link to={`/movies/${m.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w200${m.poster_path}`} />  
                        {m.title}
                        
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        </div>
        </>
        )}
</>
    )
}
export default Home;
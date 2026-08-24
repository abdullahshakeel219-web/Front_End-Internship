import { useState,useEffect } from "react";
import {Link} from 'react-router-dom';


const MoviesList=()=>{
    const[movies,setMovies]=useState([]);
    const[searchTerm,setSearchTerm]=useState('batman');
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);

    useEffect(()=>{
        
        const fetchMovie=async()=>{
            setLoading(true);
            setError(null);
            try {
                  const apikey="dcea53cc";
            let url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=${apikey}`;
            const res=await fetch(url);
            const data=await res.json();
            console.log(data);
            if (data.Search) {
                setMovies(data.Search);
            } else {
                setMovies([]);
                setError(data.Error||"No Movie Found");
            }
            } catch (err) {
                setError("Something Went Wrong,Try Again");
            }
            finally{
                setLoading(false);
            }
        }
        fetchMovie();
    },[searchTerm]);

    return (
        <>
        <label htmlFor="name">Search Movies</label>
        <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>

        {loading && <p>Loading Movies...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && (
        <div className="moviecards">
            {movies.map((m)=>(
                <div   className="card" key={m.imdbID}>
            
                    <Link to={`/movies/${m.imdbID}`} >
                    <img src={m.Poster} alt={m.Title}  width="70px" height="90px"/>
                    {m.Title}
                    </Link>
                
                </div>
                
            ))}
            </div>
        )}
        </>
    )
}
export default MoviesList;
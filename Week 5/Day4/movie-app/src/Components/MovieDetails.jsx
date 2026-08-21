import { useState,useEffect } from "react";
import {useParams} from 'react-router-dom';

const MovieDetails=()=>{
    const[movies,setMovies]=useState();
    const{imdbID}=useParams();
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);
   
    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true);
            setError(null);
            try{
            const apikey="dcea53cc";
        let url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apikey}`;
        const res=await fetch(url);
        const data=await res.json();
        console.log(data);
        if(data.Response==="true"){
            setMovies(data);
        }
        else{
            setError(data.error||"No Movie Found");
        }
        
    }catch(err){
        setError("Something Went Wrong,Try Again");
    }
    finally{
        setLoading(false);
    }
}
        fetchData();
    },[imdbID]);

    
    
    if(loading){
        return <p>Loading Movie...</p>
    }
    if(error){
        return <p>{error}</p>
    }

        return (
            <>
            <div>
            <h3>{movies.Title}</h3>
            <h4>{movies.Year}</h4>
            <h4>{movies.Rated}</h4>
            <h4>{movies.Released}</h4>
            <h4>{movies.RunTime}</h4>
            <img src={movies.Poster} alt="Movie Poster" />
            </div>
            </>
        )
    
}
export default MovieDetails;
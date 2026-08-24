import { useState,useEffect } from "react";
import {useParams} from 'react-router-dom';

const MovieDetails=()=>{
    const[movies,setMovies]=useState();
    const{id}=useParams();
  
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);
   
    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true);
            setError(null);
            try{
           const apiKey='f37cb3ad34b4e90a4f2a93970fd92d21';
     const url=`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
        const res=await fetch(url);
        const data=await res.json();
        console.log(data);
        if(data.id){
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
    },[id]);
  
    
    
    if(loading){
        return <p>Loading Movie...</p>
    }
    if(error){
        return <p>{error}</p>
    }

        return (
            <>
            <div>
            <h3>{movies.title}</h3>
            <h4>{movies.release_date}</h4>
            
           
            <h4>{movies.runtime}</h4>
            <img src={ `https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt="Movie Poster" />
            </div>
            </>
        )
    
}
export default MovieDetails;
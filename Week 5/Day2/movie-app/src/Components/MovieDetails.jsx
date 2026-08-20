import { useParams } from "react-router-dom";
import {movies} from '../DataFile/movies.js';
import styles from './MovieDetails.module.css';

const MovieDetails=()=>{
    const{id}=useParams();

    
        const movie=movies.find((m)=>m.id===id);

        return (
            <div className={styles.container}>
                <h3>{movie.title}</h3>
                <h4>{movie.genre}</h4>
                <h4>{movie.rating}</h4>
            </div>
        );
    
}
export default MovieDetails;
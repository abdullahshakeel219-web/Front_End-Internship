import {Link} from 'react-router-dom';
import {movies} from '../DataFile/movies.js';

const Movieslist=()=>{
    return (
        <>
        { movies.map((m)=>(
              <div key={m.id}>
            <Link  to={`/movies/${m.id}`}>{m.title}</Link>
               </div>
        ))}
     </>
    )
}
export default Movieslist;
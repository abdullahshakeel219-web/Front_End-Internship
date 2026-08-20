import {Routes,Route} from 'react-router-dom';
import Movieslist from './Components/Movieslist.jsx';
import MovieDetails from './Components/MovieDetails.jsx';

const App=()=>{
  return (
    <>
    <h1>Movies</h1>
    <Routes>
      <Route path="/" element={<Movieslist />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
    </Routes>
    </>
  );
}
export default App;
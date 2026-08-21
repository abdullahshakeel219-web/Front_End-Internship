import {Routes,Route} from 'react-router-dom';
import MoviesList from './Components/MoviesList.jsx';
import MovieDetails from './Components/MovieDetails.jsx';
const App=()=>{
  return(
    <>
    <h1>Movies</h1>
    <Routes>
      <Route path="/" element={<MoviesList />} />
     <Route path="/movies/:imdbID" element={<MovieDetails />} />
    </Routes>
    </>
  )
}
export default App;
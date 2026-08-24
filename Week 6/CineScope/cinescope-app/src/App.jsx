import {Routes,Route,Link} from 'react-router-dom';
import MoviesList from './Components/MoviesList.jsx';
import MovieDetails from './Components/MovieDetails.jsx';
import Home from './Components/Home.jsx';
import Navbar from './Components/Navbar.jsx';
import Watchlist from './Components/Watchlist.jsx';
const App=()=>{
  return(
    <>


   <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<MoviesList />} />
     <Route path="/movies/:id" element={<MovieDetails />} />
     <Route path="/watchlist" element={<Watchlist />} />
    </Routes>
    </>
  )
}
export default App;
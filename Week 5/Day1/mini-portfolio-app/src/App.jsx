import {Link,Routes,Route} from 'react-router-dom';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';

const App=()=>{
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
    </nav>

    <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/About" element={<About />} />
     <Route path="/Contact" element={<Contact />} />
    </Routes>
    </>
  );
}
export default App;
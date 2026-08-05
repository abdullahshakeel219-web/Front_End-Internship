import Header from './Components/Header.jsx';
import About from './Components/About.jsx';
import Skill from './Components/Skill.jsx';
import Project from './Components/Project.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';

const App=()=>{
  return(
    <div>
      <Header />
      <main>
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
       <Footer />
    </div>
  );
}
export default App;
import Header from './Components/Header.jsx';
import About from './Components/About.jsx';
import Skill from './Components/Skill.jsx';
import Project from './Components/Project.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import styles from './Components/Project.module.css';

const App=()=>{
  return(
    <>
      <Header name="Muhammad Abdullah Shakeel" />
      <main>
        <About name="Muhammad Abdullah Shakeel" description="Currently mastering React after a solid foundation in HTML, CSS and modern JavaScript — with prior experience in C#, SQL and C++."/>
        <Skill skillsList={["HTML","CSS","JavaScript","Java","OOP","C++"]}/>
         <section id="projects"className="sec">
            <h2 id={styles.projectHeading}>Projects</h2>
            <div id={styles.dii}>
        <Project projectName="Movie Ticket Booking System" projectDescription="A desktop app where users can browse movies, select seats, and book tickets,developed  using C#,SQL,Windows Forms.Technologies i used in this project are visual studio,SQL Server."/>
        <Project projectName="Chat System" projectDescription="A real-time messaging application that lets users communicate with each other instantly."/>
        <Project projectName="Blood Donor Management System" projectDescription="A system that tracks donors and their blood groups, making it easy to find donors when needed."/>
        <Project projectName="Hotel Management System" projectDescription="Hotel Management System is a console based application developed using C++.it manages room booking
        ,customer details, and customer check-out."/>
        </div>
        </section>
        <Contact emailLink="mailto:abdullah.shakeel219@gmail.com" username="abdullah.shakeel219@gmail.com"/>
      </main>
       <Footer foot="2026 Muhammad Abdullah Shakeel.All rights reserved"/>
    </>
  );
}
export default App;
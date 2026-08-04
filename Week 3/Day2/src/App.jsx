
function App(){
  return(
    <div>
      <header>
        <h1 id="nme">Muhammad Abdullah Shakeel</h1>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </header>

      <main>
        <section id="about" className="sec">
          <h1 id="introname">Hi, I'm Muhammad Abdullah Shakeel</h1>
          <p id="aboutdesc">I'm a frontend development intern with a 
            passion for turning ideas into clean, functional interfaces.
             Currently mastering React after building a solid foundation 
             in HTML, CSS, and modern JavaScript — with prior experience
              in C#, SQL, and C++ through hands-on projects.</p>
        </section>

        <section id="skills" className="sec">
            <h2>Skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>OOP</li>
                <li>C#</li>
            </ul>
        </section>

        <section id="projects"className="sec">
            <h2>Projects</h2>
            <div id="dii">
            <article>
               <h3>Movie Ticket Booking System</h3>
                <p>A desktop app where users can browse movies, select seats, and book tickets,developed  using C#,SQL,Windows Forms.Technologies i used in this project are visual studio,SQL Server.</p>
            </article>

            <article>
                <h3>Chat System</h3>
                <p>A real-time messaging application that lets users communicate with each other instantly.</p>
            </article>

            <article>
                 <h3>Blood Donor Management System</h3>
                 <p>A system that tracks donors and their blood groups, making it easy to find donors when needed.</p>
            </article>

             <article>
                 <h3>Hotel Management System</h3>
                 <p>Hotel Management System is a console based application developed using C++.it manages room booking
                    ,customer details, and customer check-out.</p>
            </article>
            </div>
        </section>
         <section id="contact">
        
            <h2>Contact Me</h2>
            <h3 id="email">Email: <a href="mailto:abdullah.shakeel219@gmail.com">abdullah.shakeel219@gmail.com</a></h3>
            
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
                <br /><br />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                <br /><br />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
                <br /><br />
                <label htmlFor="phone">PhoneNumber</label>
                <input type="number" id="phone" name="number" required />
                <br /><br />

            
                <button type="submit">Send</button>
            </form>
        </section>
      </main>
      <footer>
     <p> &copy; 2026 Muhammad Abdullah Shakeel.All rights reserved</p>
      </footer>
    </div>
  );
}
export default App;
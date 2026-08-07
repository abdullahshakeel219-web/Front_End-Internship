import styles from './Contact.module.css';
const Contact=({emailLink,username})=>{
    return(
         <section id="contact">
        
            <h2 id={styles.contactHeading}>Contact Me</h2>
            <h3 id={styles.email}>Email: <a href={emailLink}>{username}</a></h3>
            
            <form>
                <div id={styles.bd}>
              <div id={styles.inputt}>
                <input type="text" id="name" name="name" placeholder="Name" required />
                <br /><br />
                
                <input type="email" id="email" name="email" placeholder='Email' required />
                <br /><br />
                </div>
              <div id={styles.mb}>
                <textarea id="message" name="message" rows="5" placeholder="Message" required></textarea>
                <br /><br />
               
                <br /><br />

            
                <button type="submit">Send</button>
                </div>
                </div>
            </form>
        </section>
    );
}
export default Contact;
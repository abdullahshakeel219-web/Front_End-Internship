const Contact=()=>{
    return(
         <section id="contact">
        
            <h2>Contact Me</h2>
            <h3 id="email">Email: <a href="abdullah.shakeel219@gmail.com">abdullah.shakeel219@gmail.com</a></h3>
            
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
    );
}
export default Contact;
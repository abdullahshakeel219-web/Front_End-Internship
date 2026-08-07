import PropTypes from 'prop-types';
import styles from './About.module.css';
const About=({name,description})=>{
    return(
       <section id="about" className={styles.sec}>
        <p id={styles.front}>Frontend Developer Intern</p>
         <h1 id="introname">Hi,I'm {name}</h1>
        <p id={styles.aboutdesc}>{description}</p>
        <div id={styles.btnGroup}>
        <button id={styles.view}>View Projects</button>
        <button id={styles.download}>Download CV</button>
        </div>
        </section>
    );
}
export default About;

About.propTypes={
    name:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired
};
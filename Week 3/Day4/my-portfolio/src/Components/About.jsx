import PropTypes from 'prop-types';
const About=({name,description})=>{
    return(
       <section id="about" className="sec">
         <h1 id="introname">Hi, {name}</h1>
        <p id="aboutdesc">{description}</p>
        </section>
    );
}
export default About;

About.propTypes={
    name:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired
};
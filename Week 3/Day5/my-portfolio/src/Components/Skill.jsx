import PropTypes from 'prop-types';
import styles from './Skill.module.css';
const Skill=({skillsList})=>{
    return(
         <section id="skills" className="sec">
            <h2 id={styles.sk}>Skills</h2>
            <ul>
            {skillsList.map((skill,index)=>(
                <li key={index}>{skill}</li>
            ))}
            </ul>
        </section>

    );
}
export default Skill;

Skill.propTypes={
    skillsList:PropTypes.array.isRequired
};
import PropTypes from 'prop-types';
const Skill=({skillsList})=>{
    return(
         <section id="skills"className="sec">
            <h2>Skills</h2>
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
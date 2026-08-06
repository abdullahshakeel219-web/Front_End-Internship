import PropTypes from 'prop-types';
const Project=({projectName,projectDescription})=>{
    return(
      
            <article>
               <h3>{projectName}</h3>
                <p>{projectDescription}</p>
            </article>
    );
}
export default Project;

Project.propTypes={
    projectName:PropTypes.string.isRequired,
    projectDescription:PropTypes.string.isRequired
};
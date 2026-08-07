import PropTypes from 'prop-types';
import styles from './Footer.module.css';
const Footer=({foot})=>{
    return(
         <footer>
       <p > &copy; {foot}</p>
    </footer>
    );
}
export default Footer;

Footer.propTypes={
    foot:PropTypes.string.isRequired
};
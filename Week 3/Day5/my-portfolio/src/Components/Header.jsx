import PropTypes from 'prop-types';
import styles from './Header.module.css';
const Header=({name})=>{
    return(
        <header>
            <nav>
                <h2>{name}</h2>
                <div>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                </div>
            </nav>
        </header>
    );
}
export default Header;

Header.propTypes={
    name:PropTypes.string.isRequired
};
import PropTypes from 'prop-types';
const Header=({name})=>{
    return(
        <header>
            <nav>
                <h1>{name}</h1>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="contact">Contact</a>
            </nav>
        </header>
    );
}
export default Header;

Header.propTypes={
    name:PropTypes.string.isRequired
};
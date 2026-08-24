import {Link} from 'react-router-dom';
import styles from './Navbar.module.css';
const Navbar=()=>{
    return (
        <div >
            <nav className={styles.nav}>
                <Link to="/">CineScope</Link>
                <div className={styles.links}>
                <Link to="/">Home</Link>
                <Link to="/movies">MoviesList</Link>
                <Link to="/watchlist">WatchList</Link>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;
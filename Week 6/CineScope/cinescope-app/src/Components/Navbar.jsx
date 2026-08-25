import {NavLink, useNavigate} from 'react-router-dom';
import styles from './Navbar.module.css';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
const Navbar=()=>{
    const [searchTerm,setSearchTerm]=useState('');
    const navigate=useNavigate();
    return (
        <div >
            <nav className={styles.nav}>
                <NavLink  className={styles.logo}style={{color:'#f5c518'}} to="/">CineScope</NavLink>
                <div className={styles.links}>
                <NavLink className={({ isActive }) => isActive ? styles.active : ""}  to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active : ""}to="/movies">MoviesList</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active : ""} to="/watchlist">WatchList</NavLink>
                </div>
            </nav>
           <div className={styles.searchBar}>
             <span>🔍</span>
             <input  className={styles.searchBar_Input}
             type="text" value={searchTerm} 
             onChange={(e)=>setSearchTerm(e.target.value)} 
             onKeyDown={(e)=>{
                if(e.key==='Enter'){
                    navigate(`/movies?search=${searchTerm}`)
                }
             }}
             placeholder="Search movies" />

                </div>
            </div>
    )
}
export default Navbar;
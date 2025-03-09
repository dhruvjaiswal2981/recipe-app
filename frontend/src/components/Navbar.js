import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>Recipe Hub</h1>
            <ul className={styles.navLinks}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add Recipe</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

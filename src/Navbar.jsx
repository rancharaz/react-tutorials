import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/create">Blog</Link>
            </div>
        </nav>
    )
}
export default Navbar;

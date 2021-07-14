import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notfound">
            <h2>Sorry</h2>
            <p>Page not found</p>
            <Link to='/home'>Back to home page</Link>
        </div>
    )
}
export default NotFound;
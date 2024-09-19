import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <div className="navbar bg-neutral text-neutral-content">

            <Link to="/NewsList" className="btn btn-3d bg-blue-500 text-white transform transition-transform duration-300 hover:scale-105">African Archaeology News</Link>
        </div>
    );
}

export default Navbar;
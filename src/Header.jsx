import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='text-center my-5'>
            <Link to='/'>Home</Link>
            <Link to='register'>Register</Link>
        </nav>
    );
};

export default Header;
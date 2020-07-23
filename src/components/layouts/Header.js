import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='container'>
            <Link to='/' className='navbar-brand'>React Blog</Link>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#reactHookBlog' arial-controls='reactHookBlog' arial-expanded='false' aria-label='React Hook'>
                <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='reactHookBlog'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/'>Blogs</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/login'>Login</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/register'>Register</NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Header;

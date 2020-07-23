import React from 'react';
import {NavLink} from 'react-router-dom';
//import Logout from '../auth/Logout';
import '../blogs/dashboard.css';

const AdminNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <NavLink to="#" className="navbar-brand">Admin</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#adminbar" arial-controls="adminbar" arial-expanded="false">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="adminbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="dashboard" className="nav-link">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="create-post" className="nav-link">Create Post</NavLink>
                </li>
            </ul>
            {/**Right menu */}
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink to="#" className="nav-link">Welcome, Kofesto</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login" className="nav-link">Logout</NavLink>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default AdminNav;

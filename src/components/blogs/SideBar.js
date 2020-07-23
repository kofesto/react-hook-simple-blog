import React from 'react';
import {Link} from 'react-router-dom';

const SideBar = () => {
    return (
        <React.Fragment>
            <div className='col-md-3'>
            <div className="list-group">
                <Link to="dashboard" className="list-group-item list-group-item-action bg-info">
                    <span className="fas fa-cog"></span> Dashboard
                </Link>
                <Link to="#" className="list-group-item list-group-item-action">
                    <span className="fas fa-pencil-alt"></span> Posts <span className="badge badge-dark">43</span>
                </Link>
                <Link to="users.html" className="list-group-item list-group-item-action">
                    <span className="fas fa-users"></span> Users  <span className="badge badge-dark">16</span>
                </Link>
            </div>

            <div className="well">
                <h4>Some sidebar items </h4>
            </div>
        </div>
        </React.Fragment>
    )
}

export default SideBar

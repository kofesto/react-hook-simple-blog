import React from 'react';
import AdminNav from '../layouts/AdminNav';
import {Link} from 'react-router-dom';
import SideBar from './SideBar';
//import './dashboard.css';

const Dashboard = () => {
    return (
        <React.Fragment>
            <AdminNav />
            <section id="breadcrumb">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="active">Dashboard</li>
                    </ol>
                </div>
            </section>
            <section id='main'>
                <div className='container-fluid'>
                    <div className='row'>
                        {/**Sidebar menu */}
                        <SideBar />

                        <div className='col-md-9'>
                            <div className="card">
                                <div className="card-header bg-info">
                                   Website overview
                                </div>
                                <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="well dash-box">
                                            <h2><span className="fas fa-users"></span> 16</h2>
                                            <h4>Users</h4>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="well dash-box">
                                            <h2><span className="fas fa-list-alt"></span> 12</h2>
                                            <h4>Pages</h4>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="well dash-box">
                                            <h2><span className="fas fa-pencil-alt"></span> 43</h2>
                                            <h4>Posts</h4>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="well dash-box">
                                            <h2><span className="fas fa-people-carry"></span> 23,889</h2>
                                            <h4>Visitors</h4>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/**users */}
                            <div className='card'>
                                <div className='card-header'>
                                    Latest users
                                </div>
                                <div className='card-body'>
                                    <table className='table table-striped table-hover'>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Joined</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>John Smith</td>
                                                <td>jsmith@gmail.com</td>
                                                <td>Dec, 12 2017</td>
                                            </tr>
                                            <tr>
                                                <td>Eve Jackson</td>
                                                <td>jackee@yahoo.com</td>
                                                <td>Oct, 26 2018</td>
                                            </tr>
                                            <tr>
                                                <td>John Doe</td>
                                                <td>jdoe@yahoo.com</td>
                                                <td>Sept, 24 2015</td>
                                            </tr>
                                            <tr>
                                                <td>Stephanie Landon</td>
                                                <td>steph4real@gmail.com</td>
                                                <td>Jan, 08 2018</td>
                                            </tr>
                                            <tr>
                                                <td>Koffi Seglo</td>
                                                <td>kofesto@yahoo.com</td>
                                                <td>Aug, 02 2019</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id='footer'>
                <p>Copyright Simple React Hook Blog &copy; 2020 powered by <Link to='https://www.kofestotech.com'>KOFESTO TECHNOLOGIES</Link> </p>
            </footer>
        </React.Fragment>
    )
}

export default Dashboard;

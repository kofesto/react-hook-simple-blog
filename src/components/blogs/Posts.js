import React from 'react';
import AdminNav from '../layouts/AdminNav';
import SideBar from './SideBar';
import {Link} from 'react-router-dom';

const Posts = () => {
    return (
        <React.Fragment>
            <AdminNav/>
            <section id="breadcrumb">
                <div className="container-fluid">
                    <ol className="breadcrumb">
                        <li className="active">Create Post</li>
                    </ol>
                </div>
            </section>
            <section id='main'>
                <div className='container-fluid'>
                    <div className='row'>
                        {/**Sidemenu */}
                        <SideBar/>
                        <div className='col-md-9'>
                            <div className='card'>
                                <div className='card-header bg-info'>
                                    Create Post
                                </div>
                                <div className='card-body'>
                                    <div className='row'>
                                        <form>
                                            <div className='form-group row'>
                                                <label className='col-md-4 col-form-label text-md-right'>Post Title</label>
                                                <div className='col-md-8'>
                                                    <input type='text' className='form-control' />
                                                </div>
                                            </div>
                                            <div className='form-group row'>
                                                <label className='col-md-4 col-form-label text-md-right'>Post content</label>
                                                <div className='col-md-8'>
                                                    <textarea className='form-control'></textarea>
                                                </div>
                                            </div>
                                            <div className='form-group row'>
                                                <label className='col-md-4 col-form-label text-md-right'>Post Category</label>
                                                <div className='col-md-8'>
                                                    <input type='text' className='form-control' />
                                                </div>
                                            </div>
                                            <div className='form-group row'>
                                                <label className='col-md-4 col-form-label text-md-right'>Post Keywords</label>
                                                <div className='col-md-8'>
                                                    <input type='text' className='form-control' />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer id='footer' style={{marginTop:'250px'}}>
                <p>Copyright Simple React Hook Blog &copy; 2020 powered by <Link to='https://www.kofestotech.com'>KOFESTO TECHNOLOGIES</Link> </p>
            </footer>
        </React.Fragment>
    )
}

export default Posts;

import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Posts from './components/blogs/Posts';
//import { Private } from './components/auth/Auth';
import SinglePost from './components/blogs/SinglePost';
import Dashboard from './components/blogs/Dashboard';

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/create-post' component={Posts} />
      <Route path='/post/:id' component={SinglePost} />
    </Router>
  );
}

export default App;

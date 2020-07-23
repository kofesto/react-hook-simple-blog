import React, {useState, useEffect} from 'react';
import Header from './layouts/Header';
import { Link } from 'react-router-dom';

const Home = () => {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/posts')
        .then(res=>res.json())
        .then(data => setPosts(data))
        .catch(err => console.log(err));
    },[]);
    
    return (
        <React.Fragment>
            <Header />
            <div className='container'>
                <h2>All Posts</h2>
                {posts.map(post=>(
                    <div key={post.id} className='mt-3'>
                        <h2><Link to={`post/${post.id}`}>{post.title}</Link></h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default Home

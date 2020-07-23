import React, {useState, useEffect} from 'react';
import Header from '../layouts/Header';

const SinglePost = (props) => {
    
    const [post,setPost] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:8080/posts/'+props.match.params.id)
        .then(res=>res.json())
        //.then(data => console.log(data))
        .then(data => setPost(data))
        .catch(err => console.log(err));
    },[props.match.params.id]);
/*
    useEffect(()=>{
        console.log(props.match.params.id);
    });*/
    return (
        <React.Fragment>
            <Header />
            <div className='container'>
                <h2>fetch single post</h2>
                <div>
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SinglePost

import React, {useEffect, useState} from 'react';
import Post from "../post/Post"

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/1/posts')
            .then(value => value.json())
            .then(value => setPosts(value))

    },[])

    return (
        <div>
            {posts.map(value =>
                <Post
                    key={value.id}
                    id={value.id}
                    title={value.title}
                    body={value.body}
                />)}
        </div>
    );
};

export default Posts;
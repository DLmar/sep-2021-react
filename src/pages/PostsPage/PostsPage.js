import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services/posts.service";
import Post from "../../components/Post/Post";


const PostsPage = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        postsService.getAll().then(value => setPosts(value));
    },[])

    return (
        <div>
            <div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {PostsPage};
import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import Post2 from "../../components/Post2/Post2";
import {postsService} from "../../services/posts.service";

const UserPostsPage = () => {
    const [post, setPost] = useState([]);

    const {state} = useLocation();
    const {id} = useParams();

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postsService.getPosts(id).then(value => setPost([...value]));
    }, [id])
    return (
        <div>
            {post.map (post =>  <Post2 key={post.id} post={post}/>)}
            <Outlet/>
        </div>
    );
};

export {UserPostsPage};
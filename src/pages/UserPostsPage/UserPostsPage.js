import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {usersService} from "../../services/users.service";
import {postsService} from "../../services/posts.service";
import {Outlet} from "react-router-dom";

const UserPostsPage = () => {
    const [post, setPost] = useState([]);

    const {state} = useLocation();
    const {id} = useParams();

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postsService.getPosts(id).then(value => setPost(...{value}));
    }, [id])
    return (
        <div>
            {post && (
                <div>
                    <p>Id: {post.id}</p>
                    <p>UserId: {post.id}</p>
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                </div>
            )
            }
            <Outlet/>
        </div>
    );
};

export {UserPostsPage};
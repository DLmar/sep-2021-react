import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postsService} from "../../services/posts.service";
import {usersService} from "../../services/users.service";
const PostsDetailsPage = () => {

    const {id} = useParams();
    const [post, setPost] = useState(null);

    const {state} = useLocation();

    useEffect(()=>{
        if (state){
            setPost(state)
            return
        }
        postsService.getById(id).then(value => setPost(...{value}))
    },[id])
    return (
        <div>
            {post && (
                <div>
                    <h4>Id: {post.id}</h4>
                    <p>Name: {post.name}</p>
                    <p>Email: {post.email}</p>
                    <p>Body: {post.body}</p>
                    <Link path to={id.toString()} state={post}>
                        <button>Comments</button>
                    </Link>
                </div>
            )
            }
            <Outlet/>
        </div>
    );
};

export {PostsDetailsPage};
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import css from '../UserDetailsPage/UsersDetailsPage.module.css'
import {postsService} from "../../services/posts.service";
const PostsDetailsPage = () => {

    const {id} = useParams();
    const [post, setPost] = useState(null);

    const {state} = useLocation();

    useEffect(()=>{
        if (state){
            setPost(state)
            return
        }
        postsService.getById(id).then(value => setPost({...value}))
    },[id])

    return (
        <div>
            {post && (
                <div>
                    <h4>Id: {post.id}</h4>
                    <p>UserId: {post.userId}</p>
                    <i>Title: {post.title}</i>
                    <p>Body: {post.body}</p>

                    <div>
                        <Link to={'comments'}>
                            <button className={css.btn}>Comments</button>
                        </Link>
                    </div>
                </div>
            )}
            <Outlet/>
        </div>
    );
};

export {PostsDetailsPage};
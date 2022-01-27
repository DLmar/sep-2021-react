import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {postsService} from "../../services/posts.service";
import Comment from "../../components/Comment/Comment";
import {Outlet} from "react-router-dom";
import {commentsService} from "../../services/comments.service";

const PostsCommentsPage = () => {
    const [comments,setComments] = useState([]);
    const {state} = useLocation();
    const {id} = useParams();

    useEffect(()=>{
        if (state){
            setComments(state);
            return
        }
       commentsService.getById(id).then(value => setComments([...value]));
    },[id])


    return (
        <div>
            {comments.map(comment=> <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {PostsCommentsPage};
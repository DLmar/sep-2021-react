import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import Comment from "../../components/Comment/Comment";
import {commentsService} from "../../services/comments.service";


const PostsCommentsPage = () => {
    const {id} = useParams();
    const [comments,setComments] = useState([]);
    const {state} = useLocation();


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
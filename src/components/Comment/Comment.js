import React from 'react';
import css from '../Post2/Post2.module.css'
const Comment = ({comment}) => {
    const {postId,id,name,email,body} = comment;
    return (
        <div className={css.block}>
            <h4>Id: {id}</h4>
            <b>PostId: {postId}</b>
            <p><b>Name</b>: {name}</p>
            <i><b>Email</b>: {email}</i>
            <p><b>Body</b>: {body}</p>
        </div>
    );
};

export default Comment;
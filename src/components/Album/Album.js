import React from 'react';
import {Link} from "react-router-dom";
import css from "../../pages/UserDetailsPage/UsersDetailsPage.module.css";


const Album = ({album}) => {
    const [id,userId,title]=album
    return (
        <div>
            <b>Id:{id}</b>
            <p>UserId:{userId}</p>
            <p>Title:{title}</p>
        </div>

    );
};

export default Album;
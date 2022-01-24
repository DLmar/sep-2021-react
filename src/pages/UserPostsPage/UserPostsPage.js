import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {usersService} from "../../services/users.service";
import {postsService} from "../../services/posts.service";

const UserPostsPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);

    const {state} = useLocation();

    useEffect(()=>{
        if (state){
            setUser(state)
            return
        }
        postsService.getById(id).then(value => setUser(...{value}));
    },[id])
    return (
        <div>
            {user && (
                <div>id: {id}</div>
            )
            }

        </div>
    );
};

export {UserPostsPage};
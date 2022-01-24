import {Outlet, useLocation, useParams} from "react-router-dom";
import {usersService} from "../../services/users.service";
import {useEffect, useState} from "react";
const PostsDetailsPage = () => {

    const {id} = useParams();
    const [post, setPost] = useState(null);

    const {state} = useLocation();

    useEffect(()=>{
        if (state){
            setPost(state)
            return
        }
        usersService.getById(id).then(value => setPost(...{value}))
    },[id])
    return (
        <div>

            <Outlet/>
        </div>
    );
};

export {PostsDetailsPage};
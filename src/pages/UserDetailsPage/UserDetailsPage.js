import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {usersService} from "../../services/users.service"
import css from './UsersDetailsPage.module.css'

const UserDetailsPage = ({post}) => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    
    const {state} = useLocation();

    useEffect(()=>{
        if (state){
            setUser(state)
            return
        }
        usersService.getById(id).then(value => setUser(...{value}))
    },[id])
    return (
        <div>
            {user && (
                    <div>
                        <h3>id : {user.id}</h3>
                        <b>Name : {user.name}</b>
                        <p>Username : {user.username}</p>
                        <i>Email : {user.email}</i>
                        <p>Address : </p>
                        <p className={css.xd}>Street : {user.address.street}</p>
                        <p className={css.xd}>Suite : {user.address.suite}</p>
                        <p className={css.xd}>City : {user.address.city}</p>
                        <p className={css.xd}>Zipcode : {user.address.zipcode}</p>
                        <p className={css.xd}>Geo : </p>
                        <p className={css.xxd}>Lat : {user.address.geo.lat}</p>
                        <p className={css.xxd}>Lng : {user.address.geo.lng}</p>
                        <p>Phone : {user.phone}</p>
                        <p>Website : {user.website}</p>
                        <p>Company : </p>
                        <p className={css.xd}>Name : {user.company.name}</p>
                        <p className={css.xd}>CatchPhrase : {user.company.catchPhrase}</p>
                        <p className={css.xd}>Bs : {user.company.bs}</p>

                        <div className={css.xxx}>
                            <Link to={`${id.toString()}/posts`}>
                                <button className={css.btn}>Posts</button>
                            </Link>
                        </div>
                    </div>
                )
            }
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};
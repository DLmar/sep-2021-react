import {useEffect, useState} from "react";
import {usersService} from "../../services/users.service";
import User from "../../components/User/User";
import {Outlet} from "react-router-dom";
import css from './UsersPage.module.css'


const UsersPage = () => {
        const [users,setUsers] = useState([]);
        useEffect(()=>{
            usersService.getAll().then(value => setUsers(value))
        },[])
    return (
        <div className={css.users_flex}>
            <div>{users.map(user => <User key={user.id} user={user}/>)}</div>
            <div className={css.users_details}><Outlet/></div>
        </div>
    );
};

export {UsersPage};
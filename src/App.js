import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Posts from "./components/Posts";
import style from "./App.module.css";
import {useState} from "react";


const App = () => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const getUser = (user) => {
        setUser(user);
        setUserId(null)
    }
    const getUserId = (id) =>{
        setUserId(id);
    }
    return (
        <div>
            <div className={style.wrap}>
                <div className={style.usersStyle}><Users getUser={getUser}/></div>
                <div className={style.userDetails}>{user && <UserDetails user={user} getUserId={getUserId}/>}</div>
            </div>
            <div className={style.usersPosts}>{userId && <Posts userId={userId}/>}</div>
        </div>

    );
};

export default App;


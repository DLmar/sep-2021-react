import React from 'react';
import css from './user.module.css'
const User = ({user, getUser}) => {
    const {id,name} = user;
    return (
        <div style={{display : 'flex'}}>
            <h4> {id}) {name}</h4>
            <div className={css.btn}>
                <button onClick={() => getUser(user)}>Get details</button>
            </div>
        </div>
    );
};

export default User;
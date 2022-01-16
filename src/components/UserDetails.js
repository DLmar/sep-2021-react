import React from 'react';
import css from './userDetails.module.css'

const UserDetails = ({user,getUserId}) => {
    const {id, name, username, email, address:{street,suite,city,zipcode,geo:{lat,lng}}, phone,website,company:{catchPhrase,bs}} = user;

    return (
        <div>
            <h3>id:{id}</h3>
            <h3>name:{name}</h3>
            <h4>username: {username}</h4>
            <i>{email}</i>
            <div><b>address :</b></div>
            <div><b>street</b> : {street},</div>
            <div><b>suite : </b>{suite},</div>
            <div><b>city : </b>{city},</div>
            <div><b>zipcode : </b>{zipcode},</div>
            <div><b>geo : </b></div>
                 <div><b>lat : </b>{lat},</div>
                 <div><b>lng : </b>{lng}</div>
            <div><b>phone : </b>{phone}</div>
            <div><b>website : </b>{website}</div>
            <div><b>company: </b></div>
                <div><b>catchphrase : </b>{catchPhrase}</div>
                <div><b>bs : </b>{bs}</div>

            <button className={css.button} onClick={()=>getUserId(id)}>Posts</button>
        </div>
    );
};

export default UserDetails;
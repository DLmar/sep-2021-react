import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from 'react-router-dom'
import css from '../UserDetailsPage/UsersDetailsPage.module.css'
import {albumsService} from "../../services/albums.service";

const AlbumsPage = () => {
    const {id} = useParams()

    const [albums,setAlbums] = useState([]);

    useEffect(()=>{
        albumsService.getAlbums(id).then(value => setAlbums([...value]))
    },[id])
    return (
        <div>
            {albums.map(value=>
                <div key={value.id}>
                    <b>Id: {value.id}</b>
                    <p>UserId: {value.userId}</p>
                    <p>Title: {value.title}</p>
                    <Link to={`${id.toString()}/photos`}>
                        <button className={css.btn}>Photos</button>
                    </Link>
                </div>
            )}
            <Outlet/>
        </div>
    );
};

export {AlbumsPage};
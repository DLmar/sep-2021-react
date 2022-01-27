import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from 'react-router-dom'
import css from '../UserDetailsPage/UsersDetailsPage.module.css'
import {albumsService} from "../../services/albums.service";

const AlbumsPage = () => {
    const {id} = useParams()
    const [albums,setAlbums] = useState(null);

    useEffect(()=>{
        albumsService.getAlbums(id).then(value => setAlbums([...value]))
    },[id])
console.log(albums)
    return (
        <div>
            {albums && (
                <div>
                    <b>Id: {albums.id}</b>
                    <p>UserId: {albums.userId}</p>
                    <p>Title: {albums.title}</p>
                    <Link to={'photos'}>
                        <button className={css.btn}>Photos</button>
                    </Link>
                </div>
            )}
            <Outlet/>
        </div>
    );
};

export {AlbumsPage};
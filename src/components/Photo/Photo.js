import React from 'react';
import css from './Photo.module.css'
const Photo = ({photo}) => {
    const {id,albumId,title,thumbnailUrl}=photo
    return (
        <div className={css.photo}>
            <div>
                <p><b>id:</b> {id}</p>
                <p><b>albumId:</b> {albumId}</p>
                <p><b>title:</b> {title}</p>
            </div>
            <div><img src={thumbnailUrl} alt=""/></div>
        </div>
    );
};

export default Photo;
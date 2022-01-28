import React from 'react';

const Album = ({album}) => {
    const [id,userId,title]=album
    return (
        <div>
            <b>Id:{id}</b>
            <p>UserId:{userId}</p>
            <p>Title:{title}</p>
        </div>

    );
};

export default Album;
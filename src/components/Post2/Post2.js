import css from './Post2.module.css'
const Post = ({post}) => {
    const {id,userId,title,body} = post;
    return (
        <div className={css.block}>
            <p>Id: {id}</p>
            <p>UserId: {userId}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>

        </div>
    );
};

export default Post;
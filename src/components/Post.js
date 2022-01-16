import css from './post.module.css'
const Post = ({post: {userId, id, title, body}}) => {
    return (
        <div>
            <div className={css.xxx}>
                <div>UserId: {userId}</div>
                <div>Id: {id}</div>
                <div>Title: {title}</div>
                <div>Body: {body}</div>
            </div>
        </div>
    );
};

export default Post;
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id,title} = post;
    return (
        <div>
            {id}) {title}
            <Link to={id.toString()} state={post}>
                <button>PostsDetails</button>
            </Link>
        </div>
    );
};

export default Post;
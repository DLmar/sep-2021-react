import css from './User.module.css'
import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";

const User = ({user}) => {
    const {id,name} = user;
    return (
        <div className={css.xxx}>
            {id}) {name}
            <div className={'buttons'}>
                <Link to={id.toString()} state={user}>
                    <button>UserDetails</button>
                </Link>
                <Link to={`${id.toString()}/albums`}>
                    <button>Albums</button>
                </Link>
            </div>
        </div>
    );
};

export default User;
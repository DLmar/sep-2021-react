import css from './Todo.module.css'
import {useDispatch} from "react-redux";
import {changeStatus, deleteTodo} from "../../store";

const Todo = ({todo:{id,name,status}}) => {
    const dispatch = useDispatch();
    return (
        <div className={css.Todo}>
            <input type="checkbox" value={status} onChange={()=>{dispatch(changeStatus({id}))}}/>
            <div className={status?css.todoName:''}>{name}</div>
            <button onClick={()=>dispatch(deleteTodo({id}))}>Delete</button>
        </div>
    );
};

export default Todo;
import {Cats, Dogs, Form} from "./components";
import {useReducer} from "react";

import css from './App.module.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'Add_Cat':
            return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload.cat}]}

        case 'Add_Dog':
            return {...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload.dog}]}

        case 'Delete_Cat':
            return {...state, cats : state.cats.filter(cat=>cat.id !== action.payload.id)}

        case 'Delete_Dog':
            return {...state, dogs : state.dogs.filter(dog=>dog.id!==action.payload.id)}
        default:
            return state;
    }
}

function App() {

    const [{cats,dogs}, dispatch] = useReducer(reducer,{cats:[], dogs:[]});

    return (
        <div>
            <Form dispatch={dispatch}/>
            <div className={css.ddd}>
                <Cats cats={cats} dispatch={dispatch}/>
                <Dogs dogs={dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
}

export default App;

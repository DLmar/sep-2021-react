import {useRef} from "react";

const Form = ({dispatch}) => {
    const catInput = useRef();
    const dogInput = useRef();
    const form = (e) => {
        e.preventDefault();
        e.target.reset();
    }

    const saveCat = () => {
        dispatch({type: 'Add_Cat', payload: {cat: catInput.current.value}})
    }

    const saveDog = () => {
        dispatch({type: 'Add_Dog', payload: {dog: dogInput.current.value}})
    }

    return (
        <form onSubmit={form}>
            <input type="text" placeholder={'cat'} ref={catInput}/>
            <button onClick={saveCat}>Save</button>

            <input type="text" placeholder={'dog'} ref={dogInput}/>
            <button onClick={saveDog}>Save</button>

        </form>
    );
};

export {Form};
import {useState} from "react";

const Form = ({getFilter}) => {
    const [form,setForm] = useState({name:'',username:'',email:''});

    const formHandler = (e) => {
       const eventData = {...form, [e.target.name]: e.target.value}
        setForm({...eventData});
        //getFilter(eventData) //динамічно
    }
    
    const filter = (e) => {
        e.preventDefault()
        getFilter(form)
    }
    
    return (
        <div>
            <label><b>Name: </b> <input type='text' name={'name'} value={form.name} onChange={formHandler}/></label>
            <label><b>Username: </b> <input type='text' name={'username'} value={form.username} onChange={formHandler}/></label>
            <label><b>Email: </b><input type='text' name={'email'} value={form.email} onChange={formHandler}/></label>
            <button onClick={filter}>Filter</button>
        </div>
    );
};

export default Form;
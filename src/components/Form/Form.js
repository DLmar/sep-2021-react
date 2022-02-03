import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {updateCarById} from "../../store/car.slice";

const Form = () => {
    const {handleSubmit,reset,setValue,register} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    const submit = (data) =>{
        dispatch(updateCarById({id:carForUpdate.id, car:data}))
    }

    useEffect(()=>{
        if(carForUpdate){
            setValue('model',carForUpdate.model)
            setValue('year',carForUpdate.year)
            setValue('price',carForUpdate.price)
        }
    },[carForUpdate])
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <button>Update</button>
            </form>
        </div>
    );
};

export default Form;
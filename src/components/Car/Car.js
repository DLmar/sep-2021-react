import {useDispatch} from "react-redux";
import {carToUpdate} from "../../store/car.slice";

const Car = ({car}) => {
    const {model,year,price}= car
    const dispatch = useDispatch();

    return (
        <div>
            <div>Model: {model}</div>
            <div>Year: {year}</div>
            <div>Price: {price}</div>
            <button onClick={()=>dispatch(carToUpdate({car}))}>Update</button>
            <div>-------------------</div>
        </div>
    );
};

export default Car;
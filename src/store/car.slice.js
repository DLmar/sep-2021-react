import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../services";

const initialState = {
      cars:[],
      status:null,
      error: null,
      carForUpdate:null
}

export const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async (_,{rejectWithValue}) =>{
        try {
            const cars = await carService.getAll();
            return cars
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const updateCarById = createAsyncThunk(
    'carSlice/updateCarById',
    async({id,car},{dispatch})=>{
        const newCar = await carService.updateById(id,car);
        dispatch(updateCar({car:newCar}))
    }
)

const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers:{
        carToUpdate:(state,action)=>{
            state.carForUpdate = action.payload.car
        },
        updateCar:(state,action)=>{
            const index = state.cars.findIndex(car=>car.id === action.payload.id)
            state.cars[index] = action.payload.car;
        }
    },
    extraReducers:{
        [getAllCars.pending]:(state)=>{
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]:(state,action)=>{
            state.cars = action.payload
        },
        [getAllCars.rejected]:(state,action)=>{

        }

    }
});

const carReducer = carSlice.reducer;
export const {carToUpdate,updateCar} = carSlice.actions;

export default carReducer
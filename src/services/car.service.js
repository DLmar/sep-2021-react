import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const carService ={
    getAll: ()=> axiosService.get(urls.cars).then(value => value.data),
    deleteById: (id)=> axiosService.get(`${urls.cars}/${id}`),
    updateById: (id,car)=> axiosService.patch(`${urls.cars}/${id}`,car).then(value => value.data)
}
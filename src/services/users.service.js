import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const usersService = {
    getAll: ()=>axiosService.get(urls.users).then(value => value.data),
    getById: (id)=>axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
}
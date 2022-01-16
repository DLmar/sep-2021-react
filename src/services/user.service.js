import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const userService = {
    getUsers:()=> axiosService.get(urls.users).then(value => value.data)
}
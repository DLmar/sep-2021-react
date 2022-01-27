import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const commentsService = {
    getAll: ()=>axiosService.get(urls.comments).then(value => value.data),
    getById: (id)=>axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data)
}
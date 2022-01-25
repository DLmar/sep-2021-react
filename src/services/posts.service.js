import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postsService = {
    getAll: ()=>axiosService.get(urls.posts).then(value => value.data),
    getById: (userId)=>axiosService.get(`${urls.posts}/${userId}/posts`).then(value => value.data),
    getPosts: (userId)=>axiosService.get(`${urls.users}/${userId}/posts`).then(value => value.data)
}
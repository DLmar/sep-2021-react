import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const albumsService = {
    getAlbums:(id)=>axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data)
}
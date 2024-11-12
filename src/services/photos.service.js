import {request} from "./request";

export const PhotosService = {
    getById(id) {
        return request(`/photos/${id}`);
    }
}
import {request} from "./request";

const UserService = {
    getById: (id) => {
        return request(`/users/${id}`);
    }
}

export {UserService}
import React, {useEffect, useState} from "react";
import {UserService} from "../services/user.service";

const User = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // voici un exemple de requête à une API et l'usage d'un service
        UserService.getById(1).then(response => {
            setUser(response.data)
        });
    }, []);

    return (
        <div className={'other-link'}>
            <span className={'user'}>
                <h1>{`name: ${user?.name}`}</h1>
                <h2>{`email: ${user?.email}`}</h2>
            </span>
        </div>
    )
}

export default User
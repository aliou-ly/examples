import {PhotosService} from "../services/photos.service";
import React, {useEffect, useState} from "react";

const Photo = () => {
    const [photoSrc, setPhotoSrc] = useState()

    useEffect(() => {
        // voici un exemple de requête à une API et l'usage d'un service
        PhotosService.getById(1).then(response => {
            setPhotoSrc(response.data)
        });
    }, []);
    console.log(photoSrc)
    return (
        <div className={'other-link'}>
            <div>
                <img src={photoSrc?.url} alt={'photo'}/>
                <span>{photoSrc?.title}</span>
            </div>
        </div>
    )
}

export default Photo
import React, { useState,useEffect } from 'react';
import PhotoDetails from '../PhotoDetails/PhotoDetails';

const Photo = () => {
    const [photos,setPhotos]=useState({})
    useEffect(() =>{
        const url='https://randomuser.me/api/?results=5'
        fetch(url)
        .then(res => res.json())
        .then(data =>{
           setPhotos(data.results[0].picture)
            console.log(data.results[0].picture)
        })
        .catch(error => console.log(error))
    },[])
    
    return (
        <div>
                <PhotoDetails photo={photos}></PhotoDetails>
        </div>
    );
};

export default Photo;
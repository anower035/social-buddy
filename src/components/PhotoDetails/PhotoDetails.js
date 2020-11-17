import React from 'react';

const PhotoDetails = (props) => {

    return (
        <div>
            <img src={props.photo.thumbnail} alt=""/>
        </div>
    );
};

export default PhotoDetails;
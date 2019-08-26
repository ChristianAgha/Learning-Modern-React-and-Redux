import React from 'react';

const ImageList = (props) => {
    // {description, id, urls} is equivelant to image.id & image.urls ...
    const images = props.images.map(({description, id, urls}) => {
        return <img alt={description} key={id} src={urls.regular}/>;
    });
    return <div>{images}</div>;
};

export default ImageList;
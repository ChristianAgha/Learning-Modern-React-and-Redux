import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    // {description, id, urls} is equivelant to image.id & image.urls ...
    const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image}/>;
    });
    return <div className="image-list">{images}</div>;
};

export default ImageList;
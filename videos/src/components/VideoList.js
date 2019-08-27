import React from 'react';
import VideoItem from './VideoItem';

// { videos } below is destructured props.videos
const VideoList = ({ videos }) => {

    const renderedList = videos.map((video) => {
        return <VideoItem />;
    });

    // props.videos is the array of videos that we recive that we want to render to the screen
    return (
        <div>{renderedList}</div>
    );

};

export default VideoList;
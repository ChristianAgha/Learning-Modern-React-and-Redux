import React from 'react';
import VideoItem from './VideoItem';

// { videos } below is destructured props.videos
const VideoList = ({ videos }) => {

    const renderedList = videos.map((video) => {
        return <VideoItem video={video}/>;
    });

    // props.videos is the array of videos that we recive that we want to render to the screen
    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    );

};

export default VideoList;
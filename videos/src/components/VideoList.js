import React from 'react';
import VideoItem from './VideoItem';

// { videos } below is destructured props.videos
const VideoList = ({ videos, onVideoSelect }) => {

    const renderedList = videos.map((video) => {
        return <VideoItem 
                    key={video.id.videoId} 
                    onVideoSelect={onVideoSelect} 
                    video={video}
                />;
    });

    // props.videos is the array of videos that we recive that we want to render to the screen
    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    );

};

export default VideoList;
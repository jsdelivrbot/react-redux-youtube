import React from 'react';
import VideoListItem from './video_list_item';

//functional component, props is passed as an argument
const VideoList = (props) => {

    //iterate through all the videos and return a videolistitem component
    const videoItems = props.videos.map((video) => {
        return <VideoListItem video={video} />
    });

    return (
        <ul className="col-md-4 list-group">
            {/*react will know to render all the videolistitem components*/}
            {videoItems}
        </ul>
    );
}

export default VideoList;
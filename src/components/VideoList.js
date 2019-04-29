import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component
{
    renderVideoList = () => {
        const video_list = this.props.videos.map( (video) => {
            return <VideoItem 
                    key={video.id.videoId} 
                    video={video}
                    onVideoSelect={this.props.onVideoSelect}
                />;
        });

        return video_list;
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderVideoList()}
            </div>
        );
    }
}

export default VideoList;
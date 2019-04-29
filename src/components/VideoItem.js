import '../style/VideoItem.css';
import React from 'react';

class VideoItem extends React.Component
{
    onVideoSelect = () => {
        this.props.onVideoSelect(this.props.video);
    }

    render() {
        const video = this.props.video;

        return (
            <div className="video-item item" onClick={this.onVideoSelect} >
                <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.default.url} />
                <div className='content'>
                    <div className='header'>{video.snippet.title}</div>
                </div>
            </div>
        );
    }
}

export default VideoItem;
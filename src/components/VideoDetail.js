import React from 'react';

class VideoDetail extends React.Component
{
    renderVideoDetail = () => {
        if(!this.props.video){
            return <div>Loading ...</div>;
        }
        
        const video = this.props.video;
        const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
            <div>
                <div className='ui embed'>
                    <iframe title={video.snippet.title} src={videoSource} />
                </div>
                <div className='ui segment'>
                    <h4 className='ui header'>{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    }

    render() {
        return this.renderVideoDetail();
    }
}

export default VideoDetail;
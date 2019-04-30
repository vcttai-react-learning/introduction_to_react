import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

const DEFAULT_SEARCH_TERM = 'react tutorial';

class AppVideo11 extends React.Component
{
    state = { videos: [], selectedVideo: null };

    componentDidMount = () => {
        this.onSearchSubmit(DEFAULT_SEARCH_TERM);
    }

    onSearchSubmit = async (term) => {
        const videos = await youtube.get('/search', {
            params: {
                q: term,
            }
        });

        this.setState({ 
            videos: videos.data.items,
            selectedVideo: videos.data.items[0]
        });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar label='Video search' onSubmit={this.onSearchSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppVideo11;
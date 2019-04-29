import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App07 extends React.Component
{
    state = { images: [] };

    // Promise-style: 
    // onSearchSubmit(term) {
    //     axios.get('https://api.unsplash.com/search/photos', {
    //             ...
    //         })
    //         .then( (response) => {
    //             console.log(response);
    //         });
    // }
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        this.setState( { images: response.data.results } );
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar label='Image search' onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App07;
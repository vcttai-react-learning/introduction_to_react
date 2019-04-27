import React from 'react';

class SearchBar extends React.Component
{
    state = { term: '' };

    onInputChange = (event) => {
        console.log(event.target.value);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.term);
    }

    //This is uncontrolled-element
    // render() {
    //     return (
    //         <div className="ui segment">
    //             <form className="ui form">
    //                 <div className="field">
    //                     <label>Image search</label>
    //                     <input type='text' onChange={this.onInputChange} />
    //                 </div>
    //             </form>
    //         </div>
    //     );
    // }

    //this is controlled-element
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image search</label>
                        <input type='text' 
                        value={this.state.term}
                        onChange={ (event) => this.setState({ term: event.target.value }) } />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
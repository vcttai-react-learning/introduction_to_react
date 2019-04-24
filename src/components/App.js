//import React
import React from 'react';

const buttonText = "Click me!";

//Create a component
class App extends React.Component {

    render() {
        return (
            <div>
                <label className="label" htmlFor="name">Your name:</label>
                <input type="text" name="name" id="name"/>
                <button type="submit" style={{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>
            </div>
        );
    }
}

export default App;

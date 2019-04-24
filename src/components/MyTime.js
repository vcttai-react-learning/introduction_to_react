//import React
import React from 'react';

//Create a component
class MyTime extends React.Component {

    getTime = () => {
        return new Date().toLocaleTimeString();
    }

    render() {
        return (
            <div>
                {this.getTime()}
            </div>
        );
    }
}

export default MyTime;

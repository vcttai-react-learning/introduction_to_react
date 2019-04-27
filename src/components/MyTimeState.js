import React from 'react';

/**
    This component is a test of Unit 6: The lifecycle methods
*/

class MyTimeState extends React.Component
{
    state = { time: new Date().toLocaleTimeString()};

    componentDidMount() {
        // setInterval(function(){
        //     this.setState( { time: new Date().toLocaleTimeString() } );
        // }.bind(this), 1000);

        //or
        setInterval( () => {
            this.setState( { time: new Date().toLocaleTimeString() } );
        }, 1000);
    }

    render() {
        return <div>The time is: {this.state.time}</div>
    }
}

export default MyTimeState;
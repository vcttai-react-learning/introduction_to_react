import React from 'react';

class MySeasonController extends React.Component
{
    constructor(props){
        super(props);

        this.state = { lat: null, errMessage: null };
        this.getGeoLocation();
    }

    getGeoLocation = () => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ 
                    lat: position.coords.latitude
                });
                console.log(position);

                //DO NOT UPDATE STATE LIKE THIS
                //this.state.lat = ...
                //Use this.setState() instead
            },
            (err) => {
                this.setState({
                    errMessage: err.message
                });
            }
        );
    }

    render(){
        if(this.state.lat != null && this.state.errMessage == null){
            return (
                <div>
                    <div>Lat: {this.state.lat}</div>
                </div>
            );
        }
        
        if(this.state.errMessage != null){
            return (
                <div>
                    <div>Lat: {this.state.lat}</div>
                    <div>Error: {this.state.errMessage}</div>
                </div>
            );
        }

        return <div>Loading ...</div>;
    }
}

export default MySeasonController;
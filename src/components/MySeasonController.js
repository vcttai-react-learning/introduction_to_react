import React from 'react';
import MySeasonDisplay from './MySeasonDisplay';
import Spinner from './Spinner';

class MySeasonController extends React.Component
{
    // Can init state like this, it's same with "this.state = {...}" in constructor
    // state = { lat: null, errMessage: null };

    constructor(props){
        super(props);

        this.state = { lat: null, errMessage: null };
    }

    componentDidMount = () => {
        this.getGeoLocation();
    }

    getGeoLocation = () => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ 
                    lat: position.coords.latitude
                });

                //DO NOT UPDATE STATE LIKE THIS
                //this.state.lat = ...
                //Use this.setState() instead
            },
            (err) => this.setState( {errMessage: err.message} )
        );
    }

    renderContent = () => {
        if(this.state.lat != null && this.state.errMessage == null){
            return (
                <div>
                    <MySeasonDisplay lat={this.state.lat} />
                </div>
            );
        }
        
        if(this.state.errMessage != null){
            return (
                <div>
                    <div>Error: {this.state.errMessage}</div>
                </div>
            );
        }

        return <Spinner message="Getting Location ..."/>
    }

    render(){
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

export default MySeasonController;
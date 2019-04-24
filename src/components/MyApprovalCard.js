import React from 'react';

class MyApprovalCard extends React.Component {
    constructor(props) {
        super(props);

        console.log();
    }

    render() {
        return (
            <div className="ui card">
                <div className="content">
                    {this.props.children}
                </div>

                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Reject</div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default MyApprovalCard;
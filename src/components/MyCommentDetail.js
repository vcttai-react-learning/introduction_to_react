import React from 'react';

class MyCommentDetail extends React.Component {

    constructor(props) {
        super(props);

        //do something
        console.log();
    }

    render() {
        return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={this.props.avatar} />
                </a>

                <div className="content">
                    <a href="/">                            
                    {this.props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{this.props.timeAgo}</span>
                    </div>
                    <div className="text">{this.props.content}</div>
                </div>
            </div>
        );
    }
}

export default MyCommentDetail;
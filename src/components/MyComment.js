import React from 'react';
import faker from 'faker';

class MyComment extends React.Component {

    render() {
        return (
            <div className="ui container comments">
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" src={faker.image.avatar()} />
                    </a>

                    <div className="content">
                        <a href="/">
                            Sam
                        </a>
                        <div className="metadata">
                            <span className="date">Today at 6:00PM</span>
                        </div>
                        <div className="text">Nice blog post!</div>
                    </div>
                </div>

                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" src={faker.image.avatar()} />
                    </a>

                    <div className="content">
                        <a href="/">
                            Sam
                        </a>
                        <div className="metadata">
                            <span className="date">Today at 6:00PM</span>
                        </div>
                        <div className="text">Nice blog post!</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyComment;
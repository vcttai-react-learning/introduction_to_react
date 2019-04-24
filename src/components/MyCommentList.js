import React from 'react';
import faker from 'faker';
import MyCommentDetail from './MyCommentDetail';
import MyApprovalCard from './MyApprovalCard';

class MyCommentList extends React.Component {

    render() {
        return (
            <div className="ui container comments">
                <MyCommentDetail 
                    avatar={faker.image.avatar()}
                    author={faker.name.findName()} 
                    timeAgo="Today at 6:00PM" 
                    content={faker.lorem.sentence()}
                />
                <MyCommentDetail 
                    avatar={faker.image.avatar()}
                    author={faker.name.findName()} 
                    timeAgo="Today at 6:30PM" 
                    content={faker.lorem.sentence()}
                />
                <MyCommentDetail 
                    avatar={faker.image.avatar()}
                    author={faker.name.findName()} 
                    timeAgo="Today at 6:50PM" 
                    content={faker.lorem.sentence()}
                />

                <hr/>
                <MyApprovalCard>
                    <MyCommentDetail 
                        avatar={faker.image.avatar()}
                        author={faker.name.findName()} 
                        timeAgo="Today at 6:50PM" 
                        content={faker.lorem.sentence()}
                    />
                </MyApprovalCard>
                <MyApprovalCard>
                    <div>
                        <h4>Warning!</h4>
                        Are you sure want to do this?
                    </div>
                </MyApprovalCard>
            </div>
        );
    }
}

export default MyCommentList;
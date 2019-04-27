import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import AppOriginal from './App-original';
import App from './components/App';
import MyTime from './components/MyTime';
import MyTimeState from './components/MyTimeState';
import MyComment from './components/MyComment';
import MyCommentList from './components/MyCommentList';
import MySeasonController from './components/MySeasonController';
import App07 from './components/App07';

import * as serviceWorker from './serviceWorker';


//== 2. JSX
// ReactDOM.render(<AppOriginal />, document.getElementById('root'));
ReactDOM.render(<App/>, document.querySelector('#jsx-root #jsx-example'));
setInterval(
    function(){
        ReactDOM.render(<MyTime />, document.querySelector('#jsx-root #mytime'));
    },
    1000
);
ReactDOM.render(<MyTimeState />, document.querySelector('#jsx-root #mytime-state'));


//== 3. Communicating with props
ReactDOM.render(<MyComment />, document.querySelector('#communicating-props-root #comments-simple'));
ReactDOM.render(<MyCommentList />, document.querySelector('#communicating-props-root #comment-list'));


//== 4. 5. 6. Class-based components - State - Lifecycle methods
ReactDOM.render(<MySeasonController />, document.querySelector('#class-component-root #class-component-content'));


//== 7. Handling user input
ReactDOM.render(<App07 />, document.querySelector('#handling-user-input-root #handling-user-input-content '));

//==================

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

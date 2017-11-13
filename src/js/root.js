/**
 * Created by angelks on 2017/11/13.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

export  default  class Root extends React.Component {
    render() {
        return (
            <div>init</div>
        );
    };
}
ReactDOM.render(<Root />,document.getElementById('example'));
registerServiceWorker();
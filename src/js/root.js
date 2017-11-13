/**
 * Created by angelks on 2017/11/13.
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, hashHistory} from 'react-router';

import  'antd/dist/antd.css';
import PCIndex from './components/pc_index';
import registerServiceWorker from './registerServiceWorker';

export  default  class Root extends React.Component {
    render() {
        return (
            <div>
                <PCIndex/>
            </div>
        );
    };
}
ReactDOM.render(<Root />,document.getElementById('mainContainer'));
registerServiceWorker();
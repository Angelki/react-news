/**
 * Created by angelks on 2017/11/13.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import  {Button} from 'antd';
import  'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';

export  default  class Root extends React.Component {
    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
        );
    };
}
ReactDOM.render(<Root />,document.getElementById('mainContainer'));
registerServiceWorker();
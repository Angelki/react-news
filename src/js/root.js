/**
 * Created by angelks on 2017/11/13.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import  'antd/dist/antd.css';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import MediaQuery from 'react-responsive';
import registerServiceWorker from './registerServiceWorker';
import PCNewsDetails from './components/pc_details';
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Link
} from 'react-router-dom';

export  default  class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width:1224px)'>
                    <Router>
                        <div>
                            <Route exact path="/" component={PCIndex} />
                            <Route path="/details/:uniquekey" component={PCNewsDetails} />
                            {/*<Route path={`/details/:uniquekey`} component={PCNewsDetails} />*/}
                        </div>
                    </Router>
                    {/*<PCIndex/>*/}
                </MediaQuery>
                <MediaQuery query='(max-device-width:1224px)'>
                    <MobileIndex/>
                </MediaQuery>

            </div>
        );
    };
}
ReactDOM.render(<Root />,document.getElementById('mainContainer'));
registerServiceWorker();
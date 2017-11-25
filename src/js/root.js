/**
 * Created by angelks on 2017/11/13.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import  'antd/dist/antd.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import MediaQuery from 'react-responsive';
import registerServiceWorker from './registerServiceWorker';
import PCNewsDetails from './components/pc_details';
import MobileNewsDetails from './components/mobile_news_details';


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
                    <Router>
                        <div>
                            <Route exact  path="/" component={MobileIndex} />
                            <Route exact path="/details/:uniquekey" component={MobileNewsDetails} />
                            {/*<Route path={`/details/:uniquekey`} component={MobileNewsDetails} />*/}
                        </div>
                    </Router>
                    {/*<MobileIndex/>*/}
                </MediaQuery>

            </div>
        );
    };
}
ReactDOM.render(<Root />,document.getElementById('mainContainer'));
registerServiceWorker();
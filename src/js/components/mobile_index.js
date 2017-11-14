/**
 * Created by angelks on 2017/11/14.
 */
import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Row, Col} from 'antd';
import '../../css/mobile.css';


export default class MobileIndex extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader></MobileHeader>
                <MobileFooter></MobileFooter>
            </div>
        );
    };
}
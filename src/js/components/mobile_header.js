/**
 * Created by angelks on 2017/11/14.
 */
import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
import '../../css/mobile.css';

export default  class MobileHeader extends React.Component {
    render() {
        return (
            <div id="mobileHeader">
                <header>
                    <img src="./logo.png" alt="logo"/>
                    <span>ReactNews</span>
                </header>
            </div>
        )
    }
}
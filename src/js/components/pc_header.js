/**
 * Created by angelks on 2017/11/13.
 */
import React from 'react';
import { Row, Col } from 'antd';
import '../../css/pc.css';
import '../../images/logo.png';

export default class PCHeader extends React.Component {
    render() {
        return (
            <header>
               <Row>
                   <Col span={2}></Col>
                   <Col span={4}>
                       <a href="/" className="logo">
                           <img src="./logo.png" alt="logo" />
                           <span>ReactNews</span>
                       </a>
                   </Col>
                   <Col span={2}></Col>
               </Row>
            </header>
        );
    };
}
/**
 * Created by angelks on 2017/11/14.
 */
import React from 'react';
import { Row, Col } from 'antd';
import '../../css/mobile.css';

export default class MobileFooter extends React.Component {
    render() {
        return (
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                        &copy;&nbsp;2017 ReactNews.All Rights Reserved.
                    </Col>
                    <Col span={10}>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        );
    };
}
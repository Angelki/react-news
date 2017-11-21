/**
 * Created by angelks on 2017/11/21.
 */
import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel  autoplay>
                                    <div><img src="./1.png" alt=""/></div>
                                    <div><img src="./1.png" alt=""/></div>
                                    <div><img src="./1.png" alt=""/></div>
                                    <div><img src="./1.png" alt=""/></div>
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}
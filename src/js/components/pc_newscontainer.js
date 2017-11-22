/**
 * Created by angelks on 2017/11/21.
 */
import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_image_block';
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
                            <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="106px" />
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="头条" key="1">
                            <PCNewsBlock count={20} type="top" width="100%" bordered="false" />
                        </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count={20} type="guoji" width="100%" bordered="false" />
                            </TabPane>
                            <TabPane tab="娱乐" key="3">
                                <PCNewsBlock count={20} type="yule" width="100%" bordered="false" />
                            </TabPane>
                            <TabPane tab="体育" key="4">
                                <PCNewsBlock count={20} type="tiyu" width="100%" bordered="false" />
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}
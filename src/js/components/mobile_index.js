/**
 * Created by angelks on 2017/11/14.
 */
import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Tabs, Carousel} from 'antd';
// import '../../css/mobile.css';
import MobileList from './mobile_list';
const TabPane = Tabs.TabPane;


class MobileIndex extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader></MobileHeader>
                <Tabs>
                    <TabPane tab="头条" key="0">
                        <div className="carousel">
                            <Carousel  autoplay>
                                <div><img src="./1.png" alt=""/></div>
                                <div><img src="./1.png" alt=""/></div>
                                <div><img src="./1.png" alt=""/></div>
                                <div><img src="./1.png" alt=""/></div>
                            </Carousel>
                        </div>
                        <MobileList count={20} type="top" />
                    </TabPane>

                    <TabPane tab="国内" key="1">
                        <MobileList count={20} type="guonei" />
                    </TabPane>
                    <TabPane tab="国际" key="2">
                    </TabPane>
                    <TabPane tab="娱乐" key="3">
                    </TabPane>
                    <TabPane tab="体育" key="4">
                    </TabPane>
                </Tabs>
                <MobileFooter></MobileFooter>
            </div>
        );
    };
}

export default MobileIndex;
// export default MobileIndex = Form.create({})(MobileIndex);
/**
 * Created by angelks on 2017/11/14.
 */
import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Tabs} from 'antd';
import '../../css/mobile.css';

const TabPane = Tabs.TabPane;


class MobileIndex extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader></MobileHeader>
                <Tabs>
                    <TabPane tab="头条" key="0">
                    </TabPane>
                    <TabPane tab="国内" key="1">
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
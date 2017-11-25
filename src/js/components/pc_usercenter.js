/**
 * Created by angelks on 2017/11/25.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Modal} from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import {Menu,Icon} from 'antd';
import {Tabs,
    message,
    Form,
    Input,
    Button,
    Checkbox,
    Card,
    notification,
    Upload
} from 'antd';
import {BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu =Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class PCUserCenter extends React.Component {


    render() {
        return (
            <div>
        <PCHeader></PCHeader>
            <Tabs>
                <TabPane tab="我的收藏列表" key="1">

                </TabPane>
                <TabPane tab="我的评论列表" key="2">

                </TabPane>
                <TabPane tab="头像设置" key="3">

                </TabPane>
            </Tabs>
                <PCFooter></PCFooter>
            </div>
        );
    }
}
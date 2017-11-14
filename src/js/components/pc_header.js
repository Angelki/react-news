/**
 * Created by angelks on 2017/11/13.
 */
import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs,
         message,
        Form,
        Input,
    Button,
    Checkbox
} from 'antd';

import '../../css/pc.css';
import {Link} from "react-router-dom";


const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'toutiao',
            modalVisible: false,
            action:'login',
            hasLogined:'false',
            userNickName:'',
            userid: 0
        };
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        let {getFieldProps} = this.props.form;
        const userShow = this.state.hasLogined
            ?
            <Menu.Item key="logoout" className="register">
                <Button type="primary">{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                {/*<Link target="_blank">*/}
                    <Button type="dashed" htmlType="button">个人中心</Button>
                {/*</Link>*/}
                &nbsp;&nbsp;
                <Button type="ghost">退出</Button>
            </Menu.Item>
            :
            <Menu.Item key="register" className="register">
                <Icon type="appstore"/>注册/登录
            </Menu.Item>
        return (
            <header>
               <Row>
                   <Col span={4}></Col>
                   <Col span={4}>
                       <a href="/" className="logo">
                           <img src="./logo.png" alt="logo" />
                           <span>ReactNews</span>
                       </a>
                   </Col>
                   <Col span={8}>
                       <Menu mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]}>
                           <Menu.Item key="toutiao">
                               <Icon type="appstore"/>头条
                           </Menu.Item >
                           <Menu.Item key="shehui">
                               <Icon type="appstore"/>社会
                           </Menu.Item>
                           <Menu.Item key="guonei">
                               <Icon type="appstore"/>国内
                           </Menu.Item>
                           <Menu.Item key="guoji">
                               <Icon type="appstore"/>国际
                           </Menu.Item>
                           <Menu.Item key="keji">
                               <Icon type="appstore"/>科技
                           </Menu.Item >
                           <Menu.Item key="tiyu">
                               <Icon type="appstore"/>体育
                           </Menu.Item>
                           <Menu.Item key="shishang">
                               <Icon type="appstore"/>时尚
                           </Menu.Item>
                           {userShow}
                       </Menu>
                   </Col>
                   <Col span={8}></Col>
               </Row>
            </header>
        );
    };
}

export default PCHeader = Form.create({})(PCHeader);
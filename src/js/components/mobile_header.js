/**
 * Created by angelks on 2017/11/14.
 */
import React from 'react';
import '../../css/mobile.css';
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs,
    message,
    Form,
    Input,
    Button,
    Checkbox,
    Modal
} from 'antd';
import {Link} from "react-router-dom";
// import Modal from "antd/lib/modal/Modal.d";


const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class MobileHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'toutiao',
            modalVisible: false,
            action: 'login',
            hasLogined:false,
            userNickName: '',
            userid: 0
        };
    }

    handleClick = (e) => {
        if(e.key == "register") {
            this.setState({current:'register'});
            this.setModalVisible(true);
        } else {
            console.log('click ', e);
            this.setState({
                current: e.key,
            });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                var myFetchOptions = {
                    method: 'GET'
                };
                fetch("http://newsapi.gugujiankong.com/Handler.ashx?action="+this.state.action+
                    "&userName"+values.userName+
                    "&password"+values.password+
                    "&r_userName=" +values.r_userName+
                    "&r_password="+values.r_password+
                    "&r_confirmPassword"+values.r_confirmPassword,
                    myFetchOptions)
                    .then(response=>response.json())
                    .then(json=>{
                        this.setState({userNickName:json.NickUserName,userid:json.UserId});
                        localStorage.userid = json.UserId;
                        localStorage.userNickName = json.NickUserName;
                    });
                if(this.state.action === "login") {
                    this.setState({hasLogined: true});
                }
                message.success("请求成功");
                this.setModalVisible(false);
            }
        });
    };

    callback(key) {
        if(key === 1) {
            this.setState({action: 'login'});
        } else if(key === 2) {
            this.setState({action: 'register'});
        }
    };
    logout() {
        localStorage.userid = '';
        localStorage.userNickName = '';
        this.setState({hasLogined: false});
    }

    setModalVisible(value) {
        this.setState({modalVisible: value});
    };
    login() {
        this.setModalVisible(true);
    };
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const userShow = this.state.hasLogined ?
                <Icon type="inbox" />
            :
            <Icon type="setting" onClick={this.login.bind(this)}/>
        return (
            <div id="mobileHeader">
                <header>
                    <img src="./logo.png" alt="logo"/>
                    <span>ReactNews</span>
                    {userShow}
                </header>

                <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)} okText="关闭">
                    <Tabs type="card" onChange={this.callback.bind(this)}>
                        <TabPane tab="登录" key="1">
                            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    {getFieldDecorator('userName')(
                                        <Input placeholder="请输入您的账户"/>
                                    )}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('password')(
                                        <Input type="password" placeholder="请输入您的密码"/>
                                    )}
                                </FormItem>
                                <Button type="primary" htmlType="submit">登录</Button>
                            </Form>

                        </TabPane>
                        <TabPane tab="注册" key="2">
                            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    {getFieldDecorator('r_userName')(
                                        <Input placeholder="请输入您的账户"/>
                                    )}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('r_password')(
                                        <Input type="password" placeholder="请输入您的密码"/>
                                    )}
                                </FormItem>
                                <FormItem label="确认密码">
                                    {getFieldDecorator('r_confirmPassword')(
                                        <Input type="password" placeholder="请再次输入你的密码"/>
                                    )}
                                </FormItem>
                                <Button type="primary" htmlType="submit">注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        )
    }
}

export default MobileHeader = Form.create({})(MobileHeader);
/**
 * Created by angelks on 2017/11/25.
 */
import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs,
    message,
    Form,
    Input,
    Button,
    Card,
    Modal
} from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class CommonComments extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: ''
        };
    };

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey,
            myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({comments: json}));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                var myFetchOptions = {
                    method: 'GET'
                };
                fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid="+localStorage.userid+"&uniquekey=" + this.props.uniquekey+"&commnet="+values.remark,
                    myFetchOptions)
                    .then(response => response.json())
                    .then(json => {
                        this.componentDidMount();
                    });
            }
        });
    };

    render(){
        let {getFieldDecorator} = this.props.form;
        const {comments} = this.state;
        const commentList = comments.length?
            comments.map((comment, index) =>(
                <Card key={index} title={comment.UserName} extra={<a href="#">发布于 {comment.datetime}</a>}>
                    <p>{comment.Comments}</p>
                </Card>
            ))
            :
            '没有加载到任何评论！';
        return (
            <div className="comment">
                <Row>
                    <Col span={24}>
                        {commentList}
                        <Form onSubmit={this.handleSubmit.bind(this)} >
                            <FormItem label="您的评论">
                                {getFieldDecorator('remark')(
                                    <Input type="textarea" placeholder="评论内容" />
                                )}
                            </FormItem>
                            <Button type="primary" htmlType="submit" >提交评论</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    };
}

export default CommonComments = Form.create({})(CommonComments);
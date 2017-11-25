/**
 * Created by angelks on 2017/11/24.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import {Row,Col} from 'antd';
import PCNewsImageBlock from './pc_image_block';

export default class PCNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        };
    };

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey="+this.props.match.params.uniquekey,
            myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({newsItem: json});
                document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
        });
    };

    createMarkup() {
        return {__html: this.state.newsItem.pagecontent};
    };
    render() {
        return (
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div className="article" dangerouslySetInnerHTML={this.createMarkup()}>

                        </div>
                    </Col>
                    <Col span={6}>
                        <PCNewsImageBlock count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="160px" />
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter></PCFooter>
            </div>
        );
    }
}
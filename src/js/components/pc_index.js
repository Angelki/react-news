/**
 * Created by angelks on 2017/11/13.
 */
import React from 'react';
import PCHeader from './pc_header'
import {Row, Col} from 'antd';
import PCFooter from './pc_footer';
import PCNewsContainer from './pc_newscontainer'

export default class PCIndex extends React.Component {
    render() {
        return (
           <div>
               <PCHeader></PCHeader>
               <PCNewsContainer></PCNewsContainer>
               <PCFooter></PCFooter>
           </div>
        );
    };
}
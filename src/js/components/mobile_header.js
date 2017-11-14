/**
 * Created by angelks on 2017/11/14.
 */
import React from 'react';

export default  class MobileHeader extends React.Component {
    render() {
        return (
            <div id="mobileheader">
                <header>
                    <img src="./logo" alt="logo"/>
                    <span>ReactNews</span>
                </header>
            </div>
        )
    }
}
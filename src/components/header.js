import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import '../assets/css/header.css';


const { Header } = Layout;



export default class NavHeader extends Component {
    render() {
        return (
            <div className="font" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <Menu
                    className="header-bg"
                    mode="horizontal"
                >
                    {/* <div className="container"> */}
                    <div style={{ float: 'left', paddingTop: 6, paddingBottom: 8 }}>
                        <a href="/" className="social-button" style={link1}>HOME</a>
                    </div>
                    <div style={{ float: 'right', paddingTop: 6, paddingBottom: 8 }} >
                        <a className="social-button" style={link}>RESUME</a>
                        <a className="social-button" style={link}>PROJECT</a>
                        <a className="social-button" style={link}>ABOUT</a>
                        <a href="/about" className="social-button" style={link}>CONTACT </a>
                    </div>
                    {/* </div> */}
                </Menu>
            </div >
        );
    }
}

const socialLink2 = {

    color: 'black',
    textDecoration: 'none',
};

const link = {
    marginRight: 20,
    color: 'black',
    textDecoration: 'none',
}

const link1 = {
    marginLeft: 20,
    color: 'black',
    textDecoration: 'none',
}
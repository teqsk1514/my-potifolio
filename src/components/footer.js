import React, { Component } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;


export default class Foot extends Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                Portifolio ©2018 Created by Ravi Raj
            </Footer>
        );
    }
}
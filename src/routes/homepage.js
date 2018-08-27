import React, { Component } from 'react';
import { Layout } from 'antd';
import Foot from '../components/footer';
import HomeContent from '../content/homepagecontent';
import NavHeader from '../components/header';

export default class Home extends Component {
    render() {
        return (
            <Layout>
                <NavHeader />
                <HomeContent />
                <Foot />
            </Layout>
        );
    }
}
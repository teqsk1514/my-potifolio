import React, { Component } from 'react';
import { Layout } from 'antd';
import Foot from '../components/footer';
import NavHeader from '../components/header';
import HomeContent from '../content/homepagecontent';

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
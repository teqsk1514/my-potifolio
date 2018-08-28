import React, { Component } from 'react';
import { Layout } from 'antd';
import Foot from '../components/footer';
import NavHeader from '../components/header';
import AboutContent from '../content/aboutpagecontent';


export default class About extends Component {
    render() {
        return (
            <Layout>
                <NavHeader />
                <AboutContent/>
                <Foot />
            </Layout>
        );
    }
}
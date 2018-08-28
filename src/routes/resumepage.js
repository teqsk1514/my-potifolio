import React, { Component } from 'react';
import { Layout } from 'antd';
import Foot from '../components/footer';
import NavHeader from '../components/header';
import ResumeContent from '../content/resumepagecontent';


export default class Resume extends Component {
    render() {
        return (
            <Layout>
                <NavHeader />
                <ResumeContent />
                <Foot />
            </Layout>
        );
    }
}
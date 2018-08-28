import React, { Component } from 'react';
import { Layout } from 'antd';
import Foot from '../components/footer';
import NavHeader from '../components/header';
import ProjectContent from '../content/projectpagecontent';


export default class Project extends Component {
    render() {
        return (
            <Layout>
                <NavHeader />
                <ProjectContent />
                <Foot />
            </Layout>
        );
    }
}
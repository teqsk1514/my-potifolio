import React, { Component } from 'react';
import { Layout } from 'antd';
import Foot from '../components/footer';
import NavHeader from '../components/header';
import ContactContent from '../content/contactpagecontent';


export default class Contact extends Component {
    render() {
        return (
            <Layout>
                <NavHeader />
                <ContactContent />
                <Foot />
            </Layout>
        );
    }
}
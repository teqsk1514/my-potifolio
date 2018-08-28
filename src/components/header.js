import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import '../assets/css/header.css';

const { Header } = Layout;



export default class NavHeader extends Component {
    render() {
        return (
            // <div className="font" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            //     <Menu
            //         className="header-bg"
            //         mode="horizontal"
            //     >
            <AppBar position='fixed'>
                <Toolbar variant='dense'>
                    <div style={{ flex: 1 }}>
                        {/* <a href="/" style={link1}><Button variant="contained" color="primary">HOME</Button></a> */}
                        <Button variant="contained" href="/" style={link1} color="primary">HOME</Button>
                    </div>
                    <div  >
                        <Button variant="contained" href="/resume" style={link1} color="primary">RESUME</Button>
                        <Button variant="contained" href="/projects" style={link1} color="primary">PROJECTS</Button>
                        <Button variant="contained" href="/aboutme" style={link1} color="primary">ABOUT ME</Button>
                        <Button variant="contained" href="/contact" style={link1} color="primary">CONTACTS</Button>
                    </div>
                </Toolbar>
            </AppBar>
            //     </Menu>
            // </div >
        );
    }
}

const floatLeft = {

}
const floatRight = {
    float: 'right',
}

const link = {
    marginRight: 20,
    color: 'white',
    textDecoration: 'none',
}

const link1 = {
    marginLeft: 20,
    marginRight: 20,
    textDecoration: 'none',
}
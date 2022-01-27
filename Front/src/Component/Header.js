import React from 'react'; 
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { PageHeader, Tabs } from 'antd';
import 'antd/dist/antd.css';
import '../index.css';
const { TabPane } = Tabs;

const routes = [
    {
        path: '/about',
        key: '1',
    },
    {

    },
    {

    },
]

function Header () {
    return (
        <>
            <PageHeader
                className="header" 
                style={{ 
                    display : 'flex', 
                    width : "flex",
                }}
            >
                <Tabs>
                    <TabPane tab="About" key= "1" breadcrumb={{ routes }}/>
                    <TabPane tab="Professor" key= "2" />
                    <TabPane tab="Projects" key= "3" />
                    <TabPane tab="Publication" key= "4" />
                    <TabPane tab="Teaching" key= "5" />
                    <TabPane tab="Activity" key= "6" />
                    <TabPane tab="Board" key= "7" />
                    <TabPane tab="Contact" key= "8" />
                </Tabs> 
            </PageHeader>
        </>
    );
} 

export default Header;

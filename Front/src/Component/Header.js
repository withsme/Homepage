import React from 'react'; 
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { PageHeader, Tabs } from 'antd';
import 'antd/dist/antd.css';
import '../index.css';
const { TabPane } = Tabs;

const routes = [
    {
        path: '/home',
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
                    <TabPane tab="Home" key= "1" breadcrumb={{ routes }}/>
                    <TabPane tab="News" key= "2" />
                    <TabPane tab="Activity" key= "3" />
                    <TabPane tab="Research Area" key= "4" />
                    <TabPane tab="PI" key= "5" />
                    <TabPane tab="Students" key= "6" />
                    <TabPane tab="Projects" key= "7" />
                    <TabPane tab="Publications" key= "8" />
                </Tabs> 
            </PageHeader>
        </>
    );
} 

export default Header;

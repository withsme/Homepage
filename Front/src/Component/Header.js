import React from 'react'; 
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { PageHeader, Tabs } from 'antd';
import 'antd/dist/antd.css';
import styled from "styled-components";

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
                <Link to = '/'> <Content>Home</Content> </Link>
                <Link to = '/news'> <Content>News</Content> </Link>
                <Link to = '/activity'><Content>Activity</Content> </Link>
                <Link to = '/researchArea'><Content>Research Area</Content> </Link>
                <Link to = '/pi'><Content>PI</Content> </Link>
                <Link to = '/students'><Content>Students</Content> </Link>
                <Link to = '/projects'><Content>Projects</Content> </Link>
                <Link to = '/publications'><Content>Publications</Content> </Link>
            </PageHeader>
        </>
    );
} 

const Wrapper = styled.div`
  height: 5rem;
  color: black;
  background-color: white;
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
`;

const Logo = styled.div`
  padding: 0% 0% 0% 1%;
  font-size: 2rem;
`;

const Content = styled.button`
  padding: 0% 0% 0% 5%;
  font-size: 1.8rem;
`;

export default Header;

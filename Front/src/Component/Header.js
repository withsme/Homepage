import React from 'react'; 
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { PageHeader, Tabs } from 'antd';
import 'antd/dist/antd.css';
import styled from "styled-components";

function Header () {
    return (
        <Wrapper>
            <Logo>CI Lab @ KIT</Logo>
            <Link to = '/'> <Button>Home</Button> </Link>
            <Link to = '/news'> <Button>News</Button> </Link>
            <Link to = '/activity'><Button>Activity</Button> </Link>
            <Link to = '/researchArea'><Button>Research Area</Button> </Link>
            <Link to = '/pi'><Button>PI</Button> </Link>
            <Link to = '/students'><Button>Students</Button> </Link>
            <Link to = '/projects'><Button>Projects</Button> </Link>
            <Link to = '/publications'><Button>Publications</Button> </Link>
        </Wrapper>
    );
} 

const Wrapper = styled.div`
  height: 3.5rem;
  color: black;
  background-color: white;
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
`;

const Logo = styled.button`
  padding: 1% 0% 0% 1.5%;
  font-size: 1.2rem;
  background-color: white;
  border: 0px;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0% 0% 0% 1.2%;
  color: black;
  background-color: white;
  border: 0px;
  margin-left : auto;
`;

export default Header;

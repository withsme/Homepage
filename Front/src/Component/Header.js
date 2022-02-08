import React from 'react'; 
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import styled from "styled-components";
import { DownOutlined } from '@ant-design/icons';

function Header () {
  const studentsMenu = (
    <Menu>
      <Menu.Item key="0">
        <Link to = '/graduateStudents'>Graduate Students</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to = '/undergraduateStudents'>Undergraduate Students</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to = '/alumni'>Alumni</Link>
      </Menu.Item>
    </Menu>
  );

  const projectsMenu = (
    <Menu>
      <Menu.Item key="0">
        <Link to = '/projects'>Projects</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to = '/system'>System</Link>
      </Menu.Item>
    </Menu>
  );
  
  return (
    <Wrapper>
      <Logo>CI Lab @ KIT</Logo>
      <Link to = '/'> <Button>Home</Button> </Link>
      <Link to = '/news'> <Button>News</Button> </Link>
      <Link to = '/activity'><Button>Activity</Button> </Link>
      <Link to = '/researchArea'><Button>Research Area</Button> </Link>
      <Link to = '/pi'><Button>PI</Button> </Link>
      <Dropdown overlay={studentsMenu} trigger={['click']}>
        <a 
          onClick={e => e.preventDefault()}
          style={{ color: "black", marginLeft: "20px", fontSize: "16px"}}
        >
          Students <DownOutlined />
        </a>
      </Dropdown>
      <Dropdown overlay={projectsMenu} trigger={['click']}>
        <a 
          onClick={e => e.preventDefault()}
          style={{ color: "black", marginLeft: "21px", fontSize: "16px"}}
        >
          Projects <DownOutlined />
        </a>
      </Dropdown>
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

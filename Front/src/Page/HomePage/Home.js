import React from 'react';
import styled from "styled-components";
import { Row, Col } from 'antd';

function Home() {
  return (
    <>
      <Wrapper>
        <Row>
          <Col flex="50%">
            <Logo>
              <Emp>C</Emp>ognitive   
              <Emp>I</Emp>ntelligence  
              <Emp>Lab.</Emp>
            </Logo>
            <p> 
              금오공과대학교 인지지능연구실
            </p>
            <Content>
              Dept. of Computer Engineering / Artificial Intelligence Engineering 
            </Content>
            <Content>
              Kumoh National Institute of Technology (KIT), Gumi, South Korea
            </Content>
          </Col>
          <Col flex="50%">
            Research Areas
          </Col>
        </Row>
      </Wrapper>
      <Title>
        Our News
      </Title>
      <Wrapper>
        <Row>
          <Col flex="50%">
            사진 
          </Col>
          <Col flex="50%">
            목록
          </Col>
        </Row>
      </Wrapper>
      <Title>
        Activity
      </Title>
      <Wrapper>
        <Row>
          <Col flex="33%">
            사진 
          </Col>
          <Col flex="33%">
            사진
          </Col>
          <Col flex="33%">
            사진
          </Col>
        </Row>
      </Wrapper>
      <Title>
        Etc.
      </Title>
      <Wrapper>
        <Row>
          <Col flex="50%">
            사용자통계
          </Col>
          <Col flex="50%">
            IT News
          </Col>
        </Row>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  color: black;
  background-color: white;
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  padding: 2% 2% 3% 15%;

  p {
    font-size: 1.2rem;
    padding: 2% 0% 0% 0%;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
`;

const Emp = styled.button`
  font-weight: 600;
  padding: 0% 0% 0% 1.3%;
  color: black;
  background-color: white;
  border: 0px;
`;

const Title = styled.div`
  height: 4.5rem;
  padding: 1.1% 1% 1% 15%;
  background-color: lightgray;
  border: 0px;
  color: black;
  font-size: 1.4rem;
  font-weight: 600;

  p {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

const Content = styled.div`
  font-size: 1rem;
  padding: 2% 0% 0% 0%;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0% 0% 0% 1.2%;
  color: black;
  background-color: white;
  border: 0px;
  margin-left : auto;
`;

export default Home;
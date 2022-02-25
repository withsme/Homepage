import React from 'react';
import styled from "styled-components";
import { Row, Col } from 'antd';
import Footer from '../../Component/Footer';

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
      
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
  font-family: 'LatoRegular';
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
  height: 6rem; 
  padding: 1.5% 1% 1% 15%;
  background-color: #F2F3F4;
  border: 0px;
  font-size: 1.5rem;
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

{/* https://velog.io/@kyungjune/react-typescript%EB%A1%9C-%EC%BA%90%EB%9F%AC%EC%85%80-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%8D%94-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0

https://velog.io/@jemizem/React-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
*/}

export default Home;
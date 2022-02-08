import React from 'react';
import styled from "styled-components";
import { Row, Col } from 'antd';

function PI() {
    return (
        <>
            <Title>
                PI
            </Title>
            <Wrapper>
                <Row justify="center">
                    <Col flex ="35%">
                        <img src={ require('../../img/pi.jpg') } width='400px' height='auto'/>
                    </Col>
                    <Col flex ="35%">
                        Assistant Prof.   <Emp>Yuchul Jung</Emp>
                    </Col>
                </Row>
            </Wrapper>
            <SubTitle>
                Educations
            </SubTitle>
            <Wrapper>
                <Content>
                    <Emp>「 2011 Ph.D.」</Emp> Department of Computer Science, Korea Advanced Institute of Science and Technology (KAIST), Daejeon, Korea
                    <p>‣ Dissertation : An Activity Knowledge Base from Multiple Resources: Construction and Utilizations</p>
                    <p>‣ Advisor : Dr. Sung-Hyon Myaeng</p>
                    <Emp>「 2005  M.S.」</Emp> Digital Media, Department of Information and Communications, Korea Advanced Institute of Science and Technology (KAIST), Daejeon, Korea
                    <p>‣ Dissertation : Case-Based Reasoning Approach to Task Planning of Home-Service Robots</p>
                    <p>‣ Advisor : Dr. Yong. K Hwang</p>
                    <Emp>「 2003 B.S. 」</Emp> Department of Information and Communications, Ajou Univ., Suwon, Korea
                </Content>
            </Wrapper>
            <SubTitle>
                Professional Experiences
            </SubTitle>
            <Wrapper>
                <Content>
                    <Emp>「 2018.03 ~ Current 」</Emp>
                    <p> 공공데이터전략위원회, 데이터관리체계 전문위원 </p>
                    <p>  한국데이터사이언스 학회 이사 </p>
                    <Emp>「 2017.08 ~ Current 」</Emp>
                    <p>Assistant Professor, Department of Computer Engineering, Kumoh National Institute of Technology (KIT)</p>
                    <Emp>「 2017.01 ~ 2017.08 」</Emp>
                    <p>Associate Professor, Department of S&T Information Science, University of Science and Technology (UST)</p>
                    <Emp>「 2013.08 ~ 2017.08 」</Emp>
                    <p>Senior Researcher, Korea Institute of Science and Technology Information (KISTI), Daejeon, Korea</p>
                    <Emp>「 2009.01 ~ 2013.07 」</Emp>
                    <p>Senior Researcher, Electronics and Telecommunications Research Institute (ETRI), Daejeon, Korea</p>
                </Content>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  padding: 5% 2% 3% 7%;
  font-size: 1rem;
`;

const Title = styled.div`
  height: 8rem;
  font-size: 3.8rem;
  font-weight: 600;
  text-align: center;
  padding: 1.8% 0% 10% 0%;
  border: 0px;
`;

const SubTitle = styled.div`
  height: 4.3rem;
  padding: 1% 1% 1% 15%;
  background-color: lightgray;
  border: 0px;
  color: darkgreen;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Emp = styled.button`
  font-weight: 600;
  border: 0px;
  color: black;
  background-color: white;
  padding: 0.5% 0.5% 0% 0%;
  font-size: 1.15rem;
`;

const Content = styled.div`
  padding: 0% 10% 5% 5%;
  color: black;

  p {
    padding: 0.5% 0% 0% 3%;
    font-size: 1.1rem;
  }
`;

export default PI;
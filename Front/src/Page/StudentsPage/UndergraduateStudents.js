import React from 'react';
import styled from "styled-components";
import { Row, Col } from 'antd';

function UndergraduateStudents() {
    return (
        <>
            <Title>
                Undergraduate Students
            </Title>
            <Wrapper>
                <Row justify="center">
                    <Col flex="20%">
                        {/* <img src={ require('../../img/graduateLee.jpg') } width='210px' height='auto'/> */}
                    </Col>
                    <Col flex="65%">
                        <Name>배광호 (Bae Kwang Ho)</Name>
                        <Content>
                            Field of study : Math AI, Deep Learning, OCR, Web site construction.
                        </Content>
                    </Col>
                </Row>
                <Row justify="center" style={{ marginTop:"60px" }}>
                    <Col flex="20%">
                        {/* <img src={ require('../../img/community.jpg') } width='210px' height='auto'/> */}
                    </Col>
                    <Col flex="65%">
                        <Name>안홍비 (Ahn Hongbi)</Name>
                        <Content>
                            Field of study : Large-scale text data processing, Table-to-text generation.
                        </Content>
                    </Col>
                </Row>
                <Row justify="center" style={{ marginTop:"60px" }}>
                    <Col flex="20%">
                        {/* <img src={ require('../../img/graduateKim.jpg') } width='210px' height='auto'/> */}
                    </Col>
                    <Col flex="65%">
                        <Name>박소영 (Park Soyoung)</Name>
                        <Content>
                            Field of study : Large-scale Data Crawling, Document Objects Recognition, and Deep Learning
                        </Content>
                    </Col>
                </Row>
                <Row justify="center" style={{ marginTop:"60px" }}>
                    <Col flex="20%">
                        {/* <img src={ require('../../img/graduateKim.jpg') } width='210px' height='auto'/> */}
                    </Col>
                    <Col flex="65%">
                        <Name>이우철 (Lee Woochul)</Name>
                        <Content>
                            Field of study : Big data processing platforms, Deep learning-based reasoning 
                        </Content>
                    </Col>
                </Row>
                <Row justify="center" style={{ marginTop:"60px" }}>
                    <Col flex="20%">
                        {/* <img src={ require('../../img/graduateKim.jpg') } width='210px' height='auto'/> */}
                    </Col>
                    <Col flex="65%">
                        <Name>김성은 (Kim Sungeun)</Name>
                        <Content>
                            Field of study : Crawling, Big data processing platforms, Deep learning-based reasoning 
                        </Content>
                    </Col>
                </Row>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
  font-family: 'LatoRegular'; 
  line-height: 1.5;
  padding: 5% 5% 3% 5%;
  font-size: 1.1rem;
`;

const Title = styled.div`
  height: 8rem;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  padding: 2% 0% 8% 0%;
  border: 0px;
`;

const Name = styled.div`
  padding: 7% 1% 1% 5%;
  border: 0px;
  font-size: 1.3rem;
`;

const Content = styled.div`
  padding: 3% 10% 5% 5%;
  color: black;
  font-size: 1rem;
`;


export default UndergraduateStudents;
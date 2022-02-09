import React from 'react';
import styled from "styled-components";
import { Row, Col } from 'antd';

function GraduateStudents() {
    return (
        <>
            <Title>
                Graduate Students
            </Title>
            <Wrapper>
                <Row justify="center">
                    <Col flex="20%">
                        <img src={ require('../../img/graduateLee.jpg') } width='210px' height='auto'/>
                    </Col>
                    <Col flex="65%">
                        <Name>이영훈 (Yeonghun Lee)</Name>
                        <Content>
                            M.S. Student
                            <p/>Field of study : Transformer model-based automatic summary technology, real-time animation activity detection, BERT optimization.
                            <p/><a href="https://dblp.org/pers/hd/l/Lee:Yeonghun">https://dblp.org/pers/hd/l/Lee:Yeonghun</a>
                        </Content>
                    </Col>
                </Row>
                <Row justify="center" style={{ marginTop:"60px" }}>
                    <Col flex="20%">
                        {/* <img src={ require('../../img/community.jpg') } width='210px' height='auto'/> */}
                    </Col>
                    <Col flex="65%">
                        <Name>최종윤 (Jong-Yun Choi)</Name>
                        <Content>
                            M.S. Student
                            <p/>Field of study: Text Mining, NLP,  and Deep Learning
                        </Content>
                    </Col>
                </Row>
                <Row justify="center" style={{ marginTop:"60px" }}>
                    <Col flex="20%">
                        <img src={ require('../../img/graduateKim.jpg') } width='210px' height='auto'/>
                    </Col>
                    <Col flex="65%">
                        <Name>김현태 (Hyentae Kim)</Name>
                        <Content>
                            M.S. Student
                            <p/>Field of study : Large-scale Data Crawling, Document Objects Recognition, and Deep Learning
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
  font-size: 1rem;
`;

export default GraduateStudents;
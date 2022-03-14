import React from 'react';
import styled from "styled-components";
import { Row, Col } from 'antd';

function System() {
    return (
        <>
            <Title>
                Systems & Software
            </Title>
            <Wrapper>
                <Row justify="center">
                    <Col flex="25%">
                        <img src={ require('../../img/system1.jpg') } width='340px' height='auto'/>
                    </Col>
                    <Col flex="65%">
                        <SubTitle>
                            문자 광학 인식 기술 (Optical Character Recognition)
                        </SubTitle>
                        <Content>
                            <p>Developed 2020.07</p> 
                            ‒ Deep Learning based Korean/English OCR Engine (KOR: 95%, ENG: 95%, General Document: 90%)
                        </Content>
                    </Col>
                </Row>
                <Row justify="center" style={{marginTop : "30px"}}>
                    <Col flex="25%">
                        <img src={ require('../../img/voice.jpg') } width='340px' height='auto'/>
                    </Col>
                    <Col flex="65%">
                        <SubTitle>
                            한국어 음성인식 엔진 (Korean Speech Recognition Engine)
                        </SubTitle>
                        <Content>
                           <p>Developed 2020.01, revised 2021.02</p>
                            ‒ Deep Learning based Korean Speech Recognition Engine (WER: 19%,  CER: 9%)
                            <br/>‒ Accuracy Enhancement (WER: 17.1%, CER: 6.5%)
                            <br/>‒ Trained with 1000+ Hours data
                        </Content>
                    </Col>
                </Row>
                <Row justify="center" style={{marginTop : "30px"}}>
                    <Col flex="25%">
                        <img src={ require('../../img/crawling.jpg') } width='340px' height='auto'/>
                    </Col>
                    <Col flex="65%">
                        <SubTitle>                         
                            Commercial Crawling System 
                        </SubTitle>
                        <Content>
                            <p>Developed 2018 ~ ongoing</p>
                            ‒ Scheduling multiple crawlers & Managing related processes (Admin) 
                            <br/>‒ Apache solr based Search (User-side)
                            <br/>‒ Crawling 200+ websites concurrently
                            <br/>‒ Easy management of more than 40+ machines and 200+ scrapy crawling nodes
                            <br/>‒ Integration with NLP-based document management system
                        </Content>
                    </Col>
                </Row>
                <Row justify="center" style={{marginTop : "30px"}}>
                    <Col flex="25%">
                        <img src={ require('../../img/system4.png') } width='360px' height='auto'/>
                    </Col>
                    <Col flex="65%">
                        <SubTitle>                         
                            NSCC (National Science & Technology Code Classifier) 
                        </SubTitle>
                        <Content>
                            ‒ (한국) 과학기술표준분류기반 문서 자동 분류기 [2020]
                            <br/><Extra>◦ 중분류 200개 기준, Top1: 75%, Top2: 85%</Extra>
                            <br/>‒ (한국) 과학기술표준분류기반 문서 자동 분류기 [2021.11]
                            <br/><Extra>◦ 중분류 145개 기준, Top1: 78%, Top3: 90%</Extra>
                            <br/><Extra>◦ KorSci-Electra 모델 개발 & Fine-tuning</Extra>
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
  padding: 5% 7% 3% 7%;
  font-size: 1.1rem;
`;

const Title = styled.div`
  height: 8rem;
  font-size: 3.8rem;
  font-weight: 600;
  text-align: center;
  padding: 1.8% 0% 0% 0%;
  border: 0px;
`;

const SubTitle = styled.div`
  padding: 2% 0% 4% 10%;
  border: 0px;
  color: darkgreen;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Content = styled.div`
  padding: 0% 10% 10% 10%;
  color: black;
  font-size: 1rem;

  p {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const Extra = styled.button`
  border: 0px;
  color: black;
  background-color: white;
  padding: 0% 0% 0% 2%;
`;

export default System;
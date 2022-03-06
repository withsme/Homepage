import React from 'react';
import styled from "styled-components";
import { Row, Col } from 'antd';

function ResearchArea() {
    return (
        <>
            <Title>
                Research Area
                <p> 
                    We cover fundamental technologies and their applications that enable human-level inference towards general artificial intelligence (GAI).
                </p>
            </Title>
            <Wrapper>
                <Row justify="center">
                    <Col flex="20%">
                        <img src={ require('../../img/information.PNG') } width='380px' height='auto'/>
                        <Area>
                            Information Retrieval and Natural Language Processing
                        </Area>
                    </Col>
                    <Col flex="60%">
                     <Content> 
                        <ul>
                            <li>Information Retrieval: Query expansion using Web resources / Social search</li>
                            <li>Knowledge Construction: Activity & situation knowledge construction / English-Korean commonsense knowledge construction</li>
                            <li>Various Kinds of Classification Problems: Sentiment & Mood classification on blogs, News Classification, Topic Classification (Literature, Patent, National Science & Technology Standard Code, etc).</li>
                            <li>NLP based Applications, such as text summarization, text generation, and machine translation</li>
                            <li>Personalization: User log/usage mining, user intent analysis</li>
                            <li>Development of Crawler Techniques for Large-scale Data Aggregation from the Web</li>
                            <li>Large-scale Language Modeling (e.g., BERT, Electra, GPT-2/GPT-3, and etc.) and their Optimizations</li>
                            <li>Knowledge Graph</li>
                            <li>Commonsense Reasoning with Large-scale LMs</li>
                            <li>Various Downstream Tasks based on Pretraining Models.</li>
                            <li>Knowledge Distillation and Multi-task Learning</li> 
                        </ul>
                     </Content>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col flex="59%">
                     <Content>
                        <p>
                            <ul>
                                <li>Cognitive Architecture & Knowledge Support for Human-Robot Interaction</li>
                                <li>Case-based Reasoning for Human-level Intelligence (or Domain Experts)</li>
                            </ul>
                        </p>
                     </Content>
                    </Col>
                    <Col flex="20%">
                     <img src={ require('../../img/robot.PNG') } width='450px' height='auto'/>
                     <Area>
                        SW based Robotics
                     </Area>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col flex="20%">
                     <img src={ require('../../img/service.jpg') } width='390px' height='auto'/>
                     <Area>
                        Service Platforms 
                     </Area>
                    </Col>
                    <Col flex="60%">
                     <Content>
                        <p>
                            <ul>
                                <li>Service Platform: Service registry, service composition, service mashup</li>
                                <li>Semantic Web: Semantic service annotation / Goal-based semantic service discovery</li>
                            </ul>
                        </p>
                     </Content>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col flex="60%">
                     <Content>
                        <p>
                            <ul>
                                <li>Online Health Community Analysis based on NLP techniques</li>
                                <li>Medicine 2.0</li>
                                <li>Medical Big Data based Parkins Disease (PD) Estimation</li>
                                <li>Medical Big Data based Re-admission/Mortality Prediction</li>
                                <li>Clinical Decision Support System / Medical IR Systems</li>
                            </ul>
                        </p>
                     </Content>
                    </Col>
                    <Col flex="20%">
                     <img src={ require('../../img/community.jpg') } width='380px' height='auto'/>
                     <Area>
                        Public Health 
                     </Area>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col flex="20%">
                     <img src={ require('../../img/AI.PNG') } width='420px' height='auto'/>
                     <Area>
                        Artificial Intelligence (AI) and Machine Learning Stuffs  
                     </Area>
                    </Col>
                    <Col flex="60%"> 
                     <Content>
                        <p>
                            <ul>
                                <li>Semi-automatic Training Data Generation (e.g. News, Patents, Scientific Articles, Dialogues, etc.)</li>
                                <li>Classic Machine Learning Algorithms (SVM, S-SVM, CRFs, etc.)</li>
                                <li>Deep Learning (LSTM/GRU, CNN) and Reinforcement Learning</li>
                                <li>Large-scale Knowledge Construction for Decision Making and Inference</li>
                                <li>Development of AI-based Applications</li>
                                <li>Transfer Learning</li>
                                <li>Deep Learning Optimization on Neuromorphic Chips.</li>
                                ◦ Korean Speech Recognition on the Edge ‣ Semi-automatic speech data construction
                                <br/> ◦ Face Recognition
                            </ul>
                        </p>
                     </Content>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col flex="60%">
                     <Content>
                        <p>
                            <ul>
                                <li>Big Data Analysis for Heterogeneous  Information Resources</li>
                                <li>Knowledge Mining from Unstructured/Semi-structured Texts</li>
                                <li>Data Fusion of Heterogeneous Knowledge Bases</li>
                                <li>Knowledge Population using Open (Government) Data</li>
                                <li>Semantic Knowledge Integration for Various Kinds of Data</li>
                            </ul>
                        </p>
                     </Content>
                    </Col>
                    <Col flex="20%">
                     <img src={ require('../../img/data.PNG') } width='420px' height='auto'/>
                     <Area>
                        Data Science and Data Fusion  
                     </Area>
                    </Col>
                </Row>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
  font-family: 'LatoRegular';
  line-height: 1.5;
  padding: 3% 5% 3% 5%;
`;

const Title = styled.div`
  height: 8rem;
  font-size: 3.8rem;
  font-weight: 600;
  text-align: center;
  padding: 2% 0% 12% 0%;
  border: 0px;

  p {
    font-size: 1.1rem;
  }
`;

const Area = styled.div`
  padding: 3% 0% 15% 0%;
  font-size: 1.5rem;
  text-align: center;
  color: darkgreen;
`;

const Content = styled.div`
  font-size: 1rem;
  padding: 0% 0% 0% 2%;

  p {
    padding: 5% 0% 0% 0%;
  }
`;

export default ResearchArea;

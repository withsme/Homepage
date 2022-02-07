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
                <Row gutter={[24, 32]}>
                    <Col flex="30%">
                        {/* <BGImageContainer
                            source={require("../../img/information.PNG")}
                            resizeMode="stretch"
                        >
                        </BGImageContainer> */}
                        <Area>
                        Information Retrieval and Natural Language Processing
                        </Area>
                    </Col>
                    <Col flex="70%">
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
                    <Col flex="70%">
                     <Content>
                        <ul>
                            <li>Cognitive Architecture & Knowledge Support for Human-Robot Interaction</li>
                            <li>Case-based Reasoning for Human-level Intelligence (or Domain Experts)</li>
                        </ul>
                     </Content>
                    </Col>
                    <Col flex="30%">
                     {/* <img src={ require('../../img/robot.PNG') } width='100px' height='100px'/> */}
                     <Area>
                        SW based Robotics
                     </Area>
                    </Col>
                    <Col flex="30%">
                     {/* <img src={ require('../../img/service.jpg') } /> */}
                     <Area>
                        Service Platforms 
                     </Area>
                    </Col>
                    <Col flex="70%">
                     <Content>
                        <ul>
                            <li>Service Platform: Service registry, service composition, service mashup</li>
                            <li>Semantic Web: Semantic service annotation / Goal-based semantic service discovery</li>
                        </ul>
                     </Content>
                    </Col>
                    <Col flex="70%">
                     <Content>
                        <ul>
                            <li>Online Health Community Analysis based on NLP techniques</li>
                            <li>Medicine 2.0</li>
                            <li>Medical Big Data based Parkins Disease (PD) Estimation</li>
                            <li>Medical Big Data based Re-admission/Mortality Prediction</li>
                            <li>Clinical Decision Support System / Medical IR Systems</li>
                        </ul>
                     </Content>
                    </Col>
                    <Col flex="30%">
                     {/* <img src={ require('../../img/community.jpg') } /> */}
                     <Area>
                        Public Health 
                     </Area>
                    </Col>
                    <Col flex="30%">
                     {/* <img src={ require('../../img/AI.PNG') } /> */}
                     <Area>
                        Artificial Intelligence (AI) and Machine Learning Stuffs  
                     </Area>
                    </Col>
                    <Col flex="70%"> 
                     <Content>
                        <ul>
                            <li>Semi-automatic Training Data Generation (e.g. News, Patents, Scientific Articles, Dialogues, etc.)</li>
                            <li>Classic Machine Learning Algorithms (SVM, S-SVM, CRFs, etc.)</li>
                            <li>Deep Learning (LSTM/GRU, CNN) and Reinforcement Learning</li>
                            <li>Large-scale Knowledge Construction for Decision Making and Inference</li>
                            <li>Development of AI-based Applications</li>
                            <li>Transfer Learning</li>
                            <li>Deep Learning Optimization on Neuromorphic Chips.</li>
                            <li>Korean Speech Recognition on the Edge</li>
                            <li>◦ Semi-automatic speech data construction</li>
                            <li>Face Recognition</li>
                        </ul>
                     </Content>
                    </Col>
                    <Col flex="70%">
                     <Content>
                        <ul>
                            <li>Big Data Analysis for Heterogeneous  Information Resources</li>
                            <li>Knowledge Mining from Unstructured/Semi-structured Texts</li>
                            <li>Data Fusion of Heterogeneous Knowledge Bases</li>
                            <li>Knowledge Population using Open (Government) Data</li>
                            <li>Semantic Knowledge Integration for Various Kinds of Data</li>
                        </ul>
                     </Content>
                    </Col>
                    <Col flex="30%">
                     {/* <img src={ require('../../img/data.PNG') } /> */}
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
  color: black;
  background-color: white;
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  padding: 5% 2% 3% 7%;
`;

const Title = styled.div`
  height: 8rem;
  font-size: 3.8rem;
  font-weight: 600;
  text-align: center;
  padding: 1.8% 0% 10% 0%;
  border: 0px;
  color: black;

  p {
    font-size: 1.1rem;
  }
`;

const Area = styled.div`
  font-size: 1.5rem;
  text-align: center;
  color: darkgreen;
`;

const Content = styled.div`
  padding: 0% 10% 5% 5%;
  color: black;
  font-size: 1.1rem;
`;

// const BGImageContainer = styled.ImageBackground`
//   width: 40px;
//   height: 50%;
// `;

export default ResearchArea;
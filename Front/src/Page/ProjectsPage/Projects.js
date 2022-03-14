import React from 'react';
import styled from "styled-components";
import { Row, Col } from 'antd';

function Projects() {
    return (
        <>
            <Title>
                Projects
            </Title>
            <Wrapper>
                <SubTitle>
                    Ongoing Projects
                </SubTitle>
                <Row justify="center"  style={{marginTop : "10px"}}>
                    <Col flex="23%">
                        
                    </Col>
                    <Col flex="23%">
                        <Content>
                            <p>글로벌 정책 정보 분석 플랫폼 개발 (3/4차) (Development of Global Policy Information Analysis Platform (3rd))</p> 
                            「 2020.05.01~2022.04.30 」 (주)케이엔랩
                        </Content>
                    </Col>
                    <Col flex="23%">
                        
                    </Col>
                    <Col flex="23%">
                        <Content>
                            <p>라스트마일 모빌리티를 위한 AI 데이터 플랫폼 개발</p> 
                            「 2020.11.23 ~ 2022.11.22 」 중소기업기술정보진흥원
                        </Content>
                    </Col>
                </Row>
                <Row justify="center"  style={{marginTop : "10px"}}>
                    <Col flex="23%">
                        
                    </Col>
                    <Col flex="23%">
                        <Content>
                            <p>XR 플랫폼의 5G기반 교육 협업 실증</p> 
                            「 2021.12.01 ~ 2022.11.30 」  융합연구단 KISTI
                        </Content>
                    </Col>
                    <Col flex="23%">
                    </Col>
                    <Col flex="23%">
                    </Col>
                </Row>
                <SubTitle>
                    Completed Projects
                </SubTitle>
                <Row justify="center"  style={{marginTop : "10px"}}>
                    <Col flex="23%">
                        
                    </Col>
                    <Col flex="23%">
                        <Content>
                            <p>과학기술 문헌에서의 핵심어구 자동 추출 연구 (Research on Automatic Keyphrase Extraction from Scientific Research Articles)</p> 
                            「 2017.10.01~2018.09.30 」 금오공과대학교, 교내 학술 연구비
                        </Content>
                    </Col>
                    <Col flex="23%">
                        
                    </Col>
                    <Col flex="23%">
                        <Content>
                            <p>글로벌 정책 정보 분석 플랫폼 개발 (2차) (Development of Global Policy Information Analysis Platform (2nd))</p> 
                            「 2018.07.01~2018.12.31 」 (주)케이엔랩
                        </Content>
                    </Col>
                </Row>
                <Row justify="center"  style={{marginTop : "10px"}}>
                    <Col flex="23%">
                        
                    </Col>
                    <Col flex="23%">
                        <Content>
                            <p>과학기술 분류 체계 간의 카테고리 매핑을 위한 자동화 기법 연구 (Research on Automatic Category Mapping between Heterogeneous Scientific Taxonomies)</p> 
                            「 2018.10.01~2019.09.30 」 금오공과대학교, 교내 학술 연구비
                        </Content>
                    </Col>
                    <Col flex="23%">
                        
                    </Col>
                    <Col flex="23%">
                        <Content>
                            <p>에너지 절감형 첨단 부품 개발 (Development of Deep Learning-based Speech Recognition and Face Recognition)</p> 
                            「 2018.10.01~2020.12.31 」 KIAT, 국가 혁신 클러스터 사업
                        </Content>
                    </Col>
                </Row>
                <Row justify="center"  style={{marginTop : "10px"}}>
                    <Col flex="23%">
                        
                    </Col>
                    <Col flex="23%">
                        <Content>
                            <p> 과학기술텍스트에서의 연구방법론 자동 추출을 위한 딥러닝 기술 연구 (Development of Deep Learning Techniques for the Extraction of Research Methodology from Scientific Texts)</p> 
                            「 2018.03.01~2021.02.28 」 한국연구재단, 신진연구지원사업
                        </Content>
                    </Col>
                    <Col flex="23%">
                        
                    </Col>
                    <Col flex="23%">
                        <Content>
                            <p>트랜스포머 기반 한국어 과학기술 사전 학습 모델 (KorSci-Electra) 개발 연구</p> 
                            「 2021.05.01 ~ 2021.10.31 」 한국과학기술정보연구원  
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
  height: 4.3rem;
  padding: 4% 1% 7% 5%;
  border: 0px;
  color: #174F2C;
  font-size: 1.7rem;
`;

const Content = styled.div`
  padding: 0% 20% 10% 5%;
  color: black;

  p {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

export default Projects;
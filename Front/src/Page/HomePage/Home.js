import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { Row, Col, List, Carousel } from 'antd';
import ActivitySlide from './Slide/ActivitySlide';
import Footer from '../../Component/Footer';

// const request = require('request');
// var parseString = require('xml2js').parseString;

// request('https://techneedle.com/archives/category/default/ai'), function(error, response, body) {
//   parseString(body, function(err, result) {
//     var parsedData = result;

//     console.log(parsedData);
//   }) 
// }

// Image
import img1 from "../../img/service.jpg";

const data = [
  { title: 'Layout-MetaBERT for Metadata Extraction from Scientific Articles (arxiv)' },
  { title: 'Wav2KWS: Transfer Learning from Speech Representations for Keyword Spotting, IEEE Access.' },
  { title: 'A Mapping Approach to Identify Player Types for Game Recommendations, Information 2019' },
  { title: 'Minimally Supervised Relation Identification from Wikipedia Articles, Journal of Information Science Theory and Practice (JISTaP)' },
  { title: '“When Collective Knowledge Meets Crowd Knowledge in a Smart City: A Prediction Method Combining Open Data Keyword Analysis and Case-Based Reasoning,” Journal of Healthcare Engineering' },
  { title: 'Sustainable Situation-Aware Recommendation Services with Collective Intelligence, Sustainability' },
];
const TOTAL_SLIDES = 2; 

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const PrevSlide = () => {
    if (currentSlide === 0) 
      setCurrentSlide(TOTAL_SLIDES); 
    else
      setCurrentSlide(currentSlide - 1);
  };

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) 
      setCurrentSlide(0);
    else
      setCurrentSlide(currentSlide + 1);
  };
  
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; 
  }, [currentSlide]);

  return (
    <>
      <Wrapper>
        <Row justify="center">
          <Col flex="45%" style={{ marginTop: '50px' }}>
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
          <Col flex="38%" style={{width: '180px', marginLeft: '40px',}}>
            <Carousel autoplay>
              <img src={ require('../../img/information.PNG') } width='180px' height='350px' />
              <img src={ require('../../img/robot.PNG') } width='180px' height='350px'/>
              <img src={ require('../../img/service.jpg') } width='180px' height='350px'/>
              <img src={ require('../../img/community.jpg') } width='180px' height='350px'/>
              <img src={ require('../../img/AI.PNG') } width='180px' height='350px'/>
              <img src={ require('../../img/data.PNG') } width='180px' height='350px'/>
            </Carousel>
          </Col>
        </Row>
      </Wrapper>
      <Title>
        Our News
      </Title>
      <Wrapper>
        <Row justify="center">
          <Col flex="43%" style={{ textAlign: 'center', width: '350px', marginRight: '60px', marginLeft: '20px'}}>
            <Carousel autoplay effect='fade'>
              <img src={ require('../../img/NewsLAME.png') } width='380px' height='auto'/>
              <img src={ require('../../img/NewsWav2.png') } width='380px' height='auto'/>
              <img src={ require('../../img/NewsAMapping.png') } width='380px' height='auto'/>
            </Carousel>
          </Col>
          <Col flex="45%">
            <List
              size="large"
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta title={item.title} />
                </List.Item>
              )}
              footer={
                <Col style={{ textAlign: 'center'}} >
                  <Button>
                    <a 
                      href='http://localhost:3000/news'
                      style={{ color:'#258432' }}
                    >
                      Read More
                    </a> 
                  </Button>
                </Col>
              }
            />
          </Col>
        </Row>
      </Wrapper>
      <Title>
        Activity
      </Title>
      <Wrapper>
        <Row justify="center">
          <Col flex='3%' style={{ width: '20px', marginTop: '170px'}}>
            <SliderButton onClick={PrevSlide}> ◀ </SliderButton>
          </Col>
          <Col flex='85%' style={{ width: '75rem'}} >
            <SliderRowContainer>
              <SliderContainer ref={slideRef}>
                <ActivitySlide/>
              </SliderContainer>
            </SliderRowContainer>
          </Col>
          <Col flex='3%' style={{ width: '20px', marginLeft: '45px', marginTop: '170px'}}>
            <SliderButton onClick={NextSlide}> ▶ </SliderButton>
          </Col>
        </Row>
        <Row style={{ textAlign: 'center' }}>
          <Button>
            <a 
              href='http://localhost:3000/activity'
              style={{ color:'#258432' }}
            >
              Read More ≫
            </a> 
          </Button>
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
  padding: 5% 10% 4% 10%;

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
  padding: 1.7% 1% 1% 15%;
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
  font-size: 1.2rem;
  color: black;
  background-color: white;
  border: 0px;
  margin-left: auto;
`;

const SliderRowContainer = styled.div`
  width: 100%;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;

const SliderButton = styled.button`
  all: unset;
  border-radius: 10px;
  width: 20px;
`;

const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 1em;
  padding: 2% 0% 0% 0%;
  display: flex; // 이미지들을 가로로 나열합니다.
`;

export default Home;
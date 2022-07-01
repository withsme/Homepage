import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { Row, Col, List, Carousel } from 'antd';
import ActivitySlide from './Slide/ActivitySlide';
import Footer from '../../Component/Footer';
import 'antd/dist/antd.less';
import axios from "axios";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
// import {parseString} from 'xml2js';

// 모듈 로드npm
// var url = "https://techneedle.com/archives/category/default/ai";

// // var parseString = require('xml2js').parseString;
// // var request = require('request');

// fetch(url) 
//   .then((response) => response.text()) 
//   .then((responseText) => { 
//     parseString(responseText, (err, result) => {
//       if (err !== null) {
//          console.log('Fail get data.'); 
//       } else { 
//         console.log(result); 
//       } 
//     }); 
//   }) 
//   .catch((error) => {
//     console.log('Error fetching the feed: ', error); 
// });


// // RSS 다운로드 ---- (※1)
// request(RSS, function (err, response, body) {
//   if (!err && response.statusCode == 200) {
//     analyzeRSS(body);
//   }
// });

// RSS 해석 ---- (※2)
// function analyzeRSS(xml) {
//     // XML을 JS 오브젝트로 변환
//     parseString(xml, function (err, obj) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         // 기상 예보 정보 출력 ----- (※3)
//         console.log(JSON.stringify(obj)); // ----- (※4)
//         // var datas = obj.rss.channel[0].item[0].description[0].body[0].location[0].data;
//         // var city = obj.rss.channel[0].item[0].description[0].body[0].location[0].city;
//         // for (var i in datas) {
//         //     var data = datas[i];
//         //     console.log(city + " " + data.tmEf + " " + data.wf + " " + data.tmn + "~" + data.tmx);
//         // }
//     });
// }

const TOTAL_SLIDES = 2; 

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [actInfo, setActInfo] = useState('');
  const [newsInfo, setNewsInfo] = useState('');
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

  const activityApi = async () => {
    axios.get("http://localhost:5000/activity/").then((res) => {
      setActInfo(res.data);
      console.log(res.data);
    });
  };

  const newsApi = async () => {
    axios.get("http://localhost:5000/news/").then((res) => {
      setNewsInfo(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    activityApi();
    newsApi();
  }, []);

  return (
    <>
      <Wrapper>
        <Row justify="center">
          <Col flex="45%" style={{ marginTop: '20px', marginLeft: '30px' }}>
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
          <Col flex="40%" style={{width: '140px', marginLeft: '80px'}}>
            <Carousel autoplay>
              <img src={require('../../img/subImg/infor_sub.png').default} width='140px' height='300px' />
              <img src={require('../../img/subImg/robot_sub.png').default} width='140px' height='300px'/>
              <img src={require('../../img/subImg/service_sub.png').default} width='140px' height='300px'/>
              <img src={require('../../img/subImg/heal_sub.png').default} width='140px' height='300px'/>
              <img src={require('../../img/subImg/ai_sub.png').default} width='140px' height='300px'/>
              <img src={require('../../img/subImg/data_sub.png').default} width='140px' height='300px'/>
            </Carousel>
          </Col>
        </Row>
      </Wrapper> 
      <Title>
        Our News
      </Title>
      <Wrapper>
        <Row justify="center">
          <Col flex="43%" style={{ textAlign: 'center', width: '350px', marginRight: '30px'}}>
            <Carousel autoplay effect='fade'>
              {actInfo.items && actInfo.items.map((item, index) => (
                <div key={index}>
                  <img src={require(`../../img/activityImg/${item.path}`).default} width='520px' height='440px' />
                </div>
              ))}
            </Carousel>
          </Col>
          <Col flex="45%">
            <List
              size="large"
              dataSource={newsInfo.news}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta title={item.Title} />
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
          <Col flex='3%' style={{ width: '10px', marginTop: '120px'}}>
            <SliderButton onClick={PrevSlide}> <LeftOutlined /> </SliderButton>
          </Col>
          <Col flex='85%' >
            <SliderRowContainer>
              <SliderContainer ref={slideRef}>
                <ActivitySlide/>
              </SliderContainer>
            </SliderRowContainer>
          </Col>
          <Col flex='3%' style={{ width: '10px', marginLeft: '20px', marginTop: '120px'}}>
            <SliderButton onClick={NextSlide}> <RightOutlined /> </SliderButton>
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
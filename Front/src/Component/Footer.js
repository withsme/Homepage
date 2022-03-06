import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Row, Col } from 'antd';

function Footer () {
  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new window.kakao.maps.LatLng(36.145534, 128.392320),
      level: 3
    };
  
    var map = new window.kakao.maps.Map(container, options);
    var markerPosition  = new window.kakao.maps.LatLng(36.145534, 128.392320); 
    var marker = new window.kakao.maps.Marker({
      position: markerPosition
    });
    
    marker.setMap(map);
  }, [])

  return ( 
    <Wrapper> 
      <Row>
        <Col flex='70%'>
          <Title>Contact</Title>
          <Content>• Location</Content>
          <p>
            경상북도 구미시 대학로 61, 테크노관 T114호 (Techno Building 114, 61 Daehak-ro (Yangho-dong), Gumi, Gyeongbuk) [39177]
          </p>
          
          <Content>• E-mail</Content>
          <p> 
            Prof. Yuchul Jung  : jyc@kumoh.ac.kr  / enthusia77@gmail.com
            <div/>
            Google Scholar: https://scholar.google.com/citations?user=10IuaCUAAAAJ&hl=en 
          </p>
          
          <Content>• Tel</Content>
          <p>+82-54-478-7536</p>
        </Col>
            
        <Col flex='30%'>
          <div 
            id="map" 
            style = {{
              width:"250px", 
              height:"250px",
            }}
          >
          </div>
        </Col>
      </Row>
    </Wrapper> 
  );
} 

const Wrapper = styled.div`
  height: 16.5rem;
  padding: 0.5% 5% 3% 12%;
  font-family: 'LatoRegular';
  background-color: gray;
  line-height: 1.5;
  margin-top: auto;

  p {
    font-size: 0.9rem;
    padding: 0% 0% 0% 4%;
  }
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1.5% 0% 0.3% 0%;
`;

const Content = styled.div`
  font-size: 1rem;
  font-weight: 600;
  padding: 0% 0% 0% 2%;
`;


export default Footer;

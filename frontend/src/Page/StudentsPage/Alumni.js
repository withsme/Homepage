import React from 'react';
import styled from "styled-components";
import { Row, Col } from 'antd';

function Alumnui() {
    return (
        <>
            <Title>
                Alumni
            </Title>
            <Wrapper>
                <Content>
                    <p>
                        ［2021.02 졸업자］
                    </p>
                    <ul>
                        <li>서덕진: 네이버 클로바 (clova.ai)</li>
                        <li>최종윤: CI Lab.</li>
                        <li>김현태: CI Lab.</li>
                    </ul>
                </Content>
                
                <Content>
                    <p>
                        ［2020.02 졸업자］
                    </p>
                    <ul>
                        <li>서전삼: 네이버 클라우드 (NAVER Cloud)</li>
                        <li>이영훈:  CI Lab.</li>
                        <li>홍지원: 나비스 오토 모티브 시스템즈 (Navis Automotive Systems)</li>
                    </ul>
                </Content>
                
                <Content>
                    <p>
                        ［Old Members］
                    </p>
                    <ul>
                        <li>현기엽 ('20.01 ~ '20.08): 카카오페이</li>
                        <li>변준형 ('20.01 ~ '20.08)</li>
                        <li>박두형 ('19.01 ~ '20.01)</li>
                        <li>장성현 ('18.01 ~ '19.12)</li>
                        <li>임연수 ('19.01 ~ '20.02): 삼성 SDS</li>
                        <li>봉대현 ('19.01 ~ '19.12)</li>
                        <li>김영우 ('18.01 ~ '18.12)</li>
                        <li>이혜인</li>
                        <li>정연욱</li>
                        <li>원유선</li>
                    </ul>
                </Content>
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
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  padding: 2% 0% 8% 0%;
  border: 0px;
`;

const Content = styled.div`
  padding: 0% 10% 5% 5%;

  p {
    font-size: 1.5rem;
    padding: 0% 0% 0% 2.5%;
  }
`;

export default Alumnui;
import React from 'react';
import styled from "styled-components";
import { Row, Col } from 'antd';

function Students() {
    return (
        <>
            <Title>
                Students
            </Title>
            {/* <Row justify="center">
            </Row> */}
            <Wrapper>
                <SubTitle>
                    Graduate Students
                </SubTitle>
                <Content>
                    <ul>
                        <li>이영훈 (Yeonghun Lee)</li>
                        <li>최종윤 (Jong-Yun Choi)</li>
                        <li>김현태 (Hyentae Kim)</li>
                    </ul>
                </Content>
                
                <SubTitle>
                    Undergraduate Students
                </SubTitle>
                <Content>
                    <ul>
                        <li>배광호</li>
                        <li>안홍비</li>
                        <li>박소영</li>
                        <li>이우철</li>
                        <li>김성은</li>
                    </ul>
                </Content>
                
                <SubTitle>
                    Alumni
                </SubTitle>
                <Content>
                    <ul>
                        <li>서덕진</li>
                        <li>최종윤</li>
                        <li>김현태</li>
                        <li>서전삼</li>
                        <li>이영훈</li>
                        <li>홍지원</li>
                        <li>현기엽 ('20.01 ~ '20.08)</li>
                        <li>변준형 ('20.01 ~ '20.08)</li>
                        <li>박두형 ('19.01 ~ '20.01)</li>
                        <li>장성현 ('18.01 ~ '19.12)</li>
                        <li>임연수 ('19.01 ~ '20.02)</li>
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
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  padding: 5% 7% 3% 7%;
  font-size: 1.1rem;
`;

const Title = styled.div`
  height: 8rem;
  font-size: 3.8rem;
  font-weight: 600;
  text-align: center;
  padding: 1.8% 0% 10% 0%;
  border: 0px;
`;

const SubTitle = styled.div`
  height: 4.3rem;
  padding: 1% 1% 1% 6.5%;
  border: 0px;
  color: darkgreen;
  font-size: 1.5rem;
`;

const Content = styled.div`
  padding: 0% 10% 5% 5%;
  color: black;
`;

export default Students;
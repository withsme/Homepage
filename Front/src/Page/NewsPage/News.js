import React from 'react';
import styled from "styled-components";
import { Row, Col } from 'antd';

function News() {
    return (
        <>
            <Title>News</Title>
            <Wrapper>
                <Row>
                    <Col flex="30%">
                     사진
                    </Col>
                    <Col flex="70%">
                     설명
                    </Col>
                </Row>
                <Button>Read more News</Button>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
  color: black;
  background-color: white;
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  padding: 2% 2% 3% 15%;
`;

const Title = styled.div`
  height: 8rem;
  font-size: 3.8rem;
  font-weight: 600;
  text-align: center;
  padding: 1.8% 0% 2% 0%;
  border: 0px;
  color: black;
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 3% 0% 0% 36.8%;
  color: black;
  background-color: white;
  border: 0px;
  margin-left : auto;
`;

export default News;
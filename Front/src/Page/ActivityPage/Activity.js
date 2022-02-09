import React from 'react';
import styled from "styled-components";
import { Row, Col } from 'antd';

function Activity() {
    return (
        <>
            <Title>Activity</Title>
            <Wrapper>
                <Row>
                    <Col flex="33%">
                     사진
                    </Col>
                    <Col flex="33%">
                     사진
                    </Col>
                    <Col flex="33%">
                     사진
                    </Col>
                </Row>
                <Button>Read more Activity</Button>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
  font-family: 'LatoRegular';
  color: black;
  background-color: white;
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
  padding: 3% 0% 0% 36%;
  color: black;
  background-color: white;
  border: 0px;
  margin-left : auto;
`;

export default Activity;
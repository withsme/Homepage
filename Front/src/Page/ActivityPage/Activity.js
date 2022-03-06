import React from 'react';
import styled from "styled-components";
import { Row, Col, List, Card } from 'antd';
const { Meta } = Card;

const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    title:
      <Row justify='center'>
        <Col flex="25%" style={{ width: '310px', marginRight: '50px'}}>
          <Card
            bordered={false}
            style={{ width: '390px'}}
            cover={<img src={ require('../../img/robot.PNG')} />}
          >
            <Meta 
              title="체육대회" 
              description="일자 : 2021.06.19" 
              style={{ textAlign:'center' }}
            />
          </Card>
        </Col>
        <Col flex="25%" style={{ width: '310px', marginRight: '50px' }}>
          <Card
            bordered={false}
            style={{ width: '320px'}}
            cover={<img src={ require('../../img/information.PNG')}/> }
            >
              <Meta 
                title="세미나" 
                description="일자 : 2022.01.25" 
                style={{ textAlign:'center' }}
              />
            </Card>
          </Col>
          <Col flex="25%" style={{ width: '310px'}}>
          <Card
            bordered={false}
            style={{ width: '345px'}}
            cover={<img src={ require('../../img/service.jpg')}/> }
          >
            <Meta 
              title="MT" 
              description="일자 : 2021.11.05" 
              style={{ textAlign:'center' }}
            />
          </Card>
        </Col>
      </Row>
    ,
  });
}

function Activity() {
  return (
    <>
      <Title>Activity</Title>
      <Wrapper>
        <List
          itemLayout="vertical"
          size="large"
          ghost
          pagination={{ pageSize: 3 }}
          dataSource={listData}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta title={item.title}/>
            </List.Item>
          )}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  font-family: 'LatoRegular';
  color: black;
  background-color: white;
  line-height: 1.5;
  padding: 2% 10% 3% 10%;
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

export default Activity;
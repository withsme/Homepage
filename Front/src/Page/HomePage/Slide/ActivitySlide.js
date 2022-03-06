import React from 'react';
import styled from 'styled-components';
import { Row, Col, Card } from 'antd';

const { Meta } = Card;

function ActivitySlide({ img }) {
  return (
    // <IMG src={img}/>
    <Row justify='center'>
      <Col flex="25%" style={{ width: '310px', marginRight: '50px'}}>
        <Card
          bordered={false}
          style={{ width: '390px'}}
          cover={<img src={ require('../../../img/robot.PNG')} />}
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
          cover={<img src={ require('../../../img/information.PNG')}/> }
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
          cover={<img src={ require('../../../img/service.jpg')}/> }
        >
          <Meta 
            title="MT" 
            description="일자 : 2021.11.05" 
            style={{ textAlign:'center' }}
          />
        </Card>
      </Col>
    </Row>
  );
}

const IMG = styled.img`
  width: 370px;
  height: auto;
  margin-left: 20px;
  margin-right: 20px;
`;

export default ActivitySlide;
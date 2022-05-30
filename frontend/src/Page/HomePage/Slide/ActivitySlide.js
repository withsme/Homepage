import React from 'react';
import styled from 'styled-components';
import { Row, Col, Card } from 'antd';

// img
import Robot from '../../../img/robot.png';
import Information from '../../../img/information.png';
import Service from '../../../img/service.jpg';

const { Meta } = Card;

function ActivitySlide() {
  return (
    <>
      <Col flex="25%" style={{ width: '250px', marginRight: '15px', marginLeft: '15px'}}>
        <Card
          bordered={false}
          style={{ width: '300px'}}
          cover={<img src={ Robot}/>}
        >
          <Meta 
            title="체육대회" 
            description="일자 : 2021.06.19" 
            style={{ textAlign:'center' }}
          />
        </Card>
      </Col>
      <Col flex="25%" style={{ width: '250px', marginRight: '15px', marginLeft: '15px' }}>
        <Card
          bordered={false}
          style={{ width: '240px'}}
          cover={<img src={Information}/> }
          >
            <Meta 
              title="세미나" 
              description="일자 : 2022.01.25" 
              style={{ textAlign:'center' }}
            />
          </Card>
        </Col>
        <Col flex="25%" style={{ width: '250px', marginRight: '15px', marginLeft: '15px' }}>
        <Card
          bordered={false}
          style={{ width: '255px'}}
          cover={<img src={Service}/> }
        >
          <Meta 
            title="MT" 
            description="일자 : 2021.11.05" 
            style={{ textAlign:'center' }}
          />
        </Card>
      </Col>
      <Col flex="25%" style={{ width: '250px', marginRight: '15px', marginLeft: '15px'}}>
        <Card
          bordered={false}
          style={{ width: '300px'}}
          cover={<img src={ Robot}/>}
        >
          <Meta 
            title="체육대회" 
            description="일자 : 2021.06.19" 
            style={{ textAlign:'center' }}
          />
        </Card>
      </Col>
      <Col flex="25%" style={{ width: '250px', marginRight: '15px', marginLeft: '15px' }}>
        <Card
          bordered={false}
          style={{ width: '240px'}}
          cover={<img src={Information}/> }
          >
            <Meta 
              title="세미나" 
              description="일자 : 2022.01.25" 
              style={{ textAlign:'center' }}
            />
          </Card>
        </Col>
        <Col flex="25%" style={{ width: '250px', marginRight: '15px', marginLeft: '15px'}}>
        <Card
          bordered={false}
          style={{ width: '255px' }}
          cover={<img src={Service}/> }
        >
          <Meta 
            title="MT" 
            description="일자 : 2021.11.05" 
            style={{ textAlign:'center' }}
          />
        </Card>
      </Col>
      <Col flex="25%" style={{ width: '250px', marginRight: '15px', marginLeft: '15px' }}>
        <Card
          bordered={false}
          style={{ width: '240px'}}
          cover={<img src={Information}/> }
          >
            <Meta 
              title="세미나" 
              description="일자 : 2022.01.25" 
              style={{ textAlign:'center' }}
            />
          </Card>
        </Col>
        <Col flex="25%" style={{ width: '250px', marginRight: '15px', marginLeft: '15px'}}>
        <Card
          bordered={false}
          style={{ width: '255px' }}
          cover={<img src={Service}/> }
        >
          <Meta 
            title="MT" 
            description="일자 : 2021.11.05" 
            style={{ textAlign:'center' }}
          />
        </Card>
      </Col>
      <Col flex="25%" style={{ width: '250px', marginRight: '15px', marginLeft: '15px'}}>
        <Card
          bordered={false}
          style={{ width: '300px'}}
          cover={<img src={ Robot}/>}
        >
          <Meta 
            title="체육대회" 
            description="일자 : 2021.06.19" 
            style={{ textAlign:'center' }}
          />
        </Card>
      </Col>
    </>
  );
}

const IMG = styled.img`
  width: 370px;
  height: auto;
  margin-left: 20px;
  margin-right: 22px;
`;

export default ActivitySlide;
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Card, List } from 'antd';
import axios from "axios";

// img
import Robot from '../../../img/robot.png';
import Information from '../../../img/information.png';
import Service from '../../../img/service.jpg';

const { Meta } = Card;

function ActivitySlide() {
  const [actInfo, setActInfo] = useState('');
  let actLength = 0;

  const actInfoApi = async () => {
    axios.get("http://localhost:5000/activity/").then((res) => {
      setActInfo(res.data);
      // setactLength(res.data.length);
      actLength = res.data.length;
      console.log(res.data);
    });
  };

  useEffect(() => {
    actInfoApi();
  }, []);
  
  return (
    <>
      <List
        grid={{ gutter: 3, column: 3 }}
        dataSource={actInfo.items}
        renderItem={(item) => (
          <List.Item>
            <Row justify='center'>
              <Col flex="10%" style={{ width: '400px', marginRight: '15px', marginLeft: '15px'}}>
                <Card
                  bordered={false}
                  style={{ width: '300px'}}
                  cover={// <img src={require(item.path)}/>
                    <img src={require(`../../../img/activityImg/${item.path}`).default} width='300px' height='220px' />
                  }
                >
                  <Meta 
                    style={{ textAlign:'center' }}
                    title= {item.name}
                    description={item.date}
                  />
                </Card>
              </Col>
            </Row>
            {/* <List.Item.Meta title={item.title}/> */}
          </List.Item>
        )}
      />
    </>
  );
}

export default ActivitySlide;
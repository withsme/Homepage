import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Card, List } from 'antd';
import axios from "axios";
import 'antd/dist/antd.css';

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
              <Col flex="50%" style={{ width: '400px', marginRight: '15px', marginLeft: '15px', textAlign: 'center'}}>
                <Card
                  bordered={false}
                  style={{ width: '300px', }}
                  cover={
                    <img src={require(`../../../img/activityImg/${item.path}`).default} width='150px' height='220px' />
                  }
                >
                  <Meta 
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
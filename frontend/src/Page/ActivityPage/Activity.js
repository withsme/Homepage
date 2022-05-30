import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";
import { Row, Col, List, Card } from 'antd';
const { Meta } = Card;

function Activity() {
  const [imgInfo, setImgInfo] = useState('');
  let imgLength = 0;

  const imgInfoApi = async () => {
    axios.get("http://localhost:5000/activity/").then((res) => {
      setImgInfo(res.data);
      // setImgLength(res.data.length);
      imgLength = res.data.length;
      console.log(res.data);
    });
  };

  useEffect(() => {
    imgInfoApi();
  }, []);

  return (
    <>
      <Title>Activity</Title>
      <List
        itemLayout="vertical"
        size="large"
        // ghost
        pagination={{ pageSize: 3 }}
        dataSource={imgInfo.items}
        renderItem={(item) => (
          <List.Item>
            <Row justify='center'>
              <Col flex="25%" style={{ width: '310px', marginRight: '50px'}}>
                <Card
                  bordered={false}
                  style={{ width: '390px'}}
                  cover={// <img src={require(item.path)}/>
                    <img src={item.path}/>
                  }
                >
                  <Meta 
                    title= {item.name}
                    description={item.date}
                    style={{ textAlign:'center' }}
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
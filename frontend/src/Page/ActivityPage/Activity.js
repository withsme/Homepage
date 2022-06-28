import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";
import { Row, Col, List, Card } from 'antd';
import 'antd/dist/antd.less';
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
      <Wrapper>
        <List
          grid={{ gutter: 3, column: 3 }}
          size="large"
          // ghost
          pagination={{ pageSize: 3 }}
          dataSource={imgInfo.items}
          renderItem={(item) => (
            <List.Item>
              <Row justify='center'>
                <Col flex="25%" style={{ width: '310px', marginRight: '60px'}}>
                  <Card
                    bordered={false}
                    style={{ width: '390px'}}
                    cover={// <img src={require(item.path)}/>
                      <img 
                        src={require(`../../img/activityImg/${item.path}`).default} 
                        width='220px' 
                        height='220px'
                        style={{ marginRight: '10px'}}
                      />
                    }
                  >
                    <Meta 
                      title= {item.name}
                      description={item.date}
                      style={{ textAlign:'center'}}
                    />
                  </Card>
                </Col>
              </Row>
              {/* <List.Item.Meta title={item.title}/> */}
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
  text-align: center;
`;

const Title = styled.div`
  height: 8rem;
  font-size: 3.8rem;
  font-weight: 600;
  text-align: center;
  padding: 1.8% 0% 13% 0%;
  border: 0px;
  color: black;
`;

export default Activity;
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Row, Col, List, Pagination } from 'antd';
import axios from "axios";
import 'antd/dist/antd.less';

function News() {
  const [newsInfo, setNewsInfo] = useState('');
  
  const newsInfoApi = async () => {
    axios.get("http://localhost:5000/news/").then((res) => {
      setNewsInfo(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    newsInfoApi();
  }, []);

  return (
    <>
      <Title>News</Title>
      <Wrapper>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{ pageSize: 5 }}
          dataSource={newsInfo.news}
          renderItem={(item) => (
            <List.Item
              key={item.Title}
              extra={ <img src={require(`../../img/award.jpg`).default} width='380px' height='auto'/> }
            >
              <List.Item.Meta title={item.Title} />
                <Content>
                  {item.Content} 
                  <p> {item.Date} </p>
                </Content>
            </List.Item>
          )}
          />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  font-family: 'LatoBold';
  line-height: 1.5;
  padding: 2% 5% 3% 5%;
  font-size: 1.3rem;
`;

const Content = styled.div`
  font-family: 'LatoLight';
  font-size: 1.1rem;

  p {
    padding: 1% 0% 0% 0%;
    font-family: 'LatoRegular';
    font-size: 1rem;
    color: #108514;
  }
`;

const Title = styled.div`
  height: 8rem;
  font-size: 3.8rem;
  font-weight: 600;
  text-align: center;
  padding: 1.8% 0% 10% 0%;
  border: 0px;
`;


export default News;
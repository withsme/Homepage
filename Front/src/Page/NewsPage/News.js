import React from 'react';
import styled from "styled-components";
import { Row, Col, List, Pagination } from 'antd';

function News() {
  const listData = [];
  for (let i = 0; i < 6; i++) {
    listData.push({
      title: `title ${i}`,
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
  }

  return (
    <>
      <Title>News</Title>
      <Wrapper>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{ pageSize: 5 }}
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            extra={ <img src={ require('../../img/information.PNG') } width='330px' height='auto'/> }
          >
            <List.Item.Meta title={item.title}/>
              {item.content}
          </List.Item>
        )}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  font-family: 'LatoRegular';
  line-height: 1.5;
  padding: 2% 5% 3% 5%;
`;

const Title = styled.div`
  height: 8rem;
  font-size: 3.8rem;
  font-weight: 600;
  text-align: center;
  padding: 1.8% 0% 2% 0%;
  border: 0px;
`;


export default News;
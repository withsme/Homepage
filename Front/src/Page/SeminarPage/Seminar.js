import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { Table } from 'antd';

const link = <a href='https://arxiv.org/abs/2109.08585'/>
const columns = [
  { title: 'Date', width: 30, dataIndex: 'date', key: 'date' },
  { title: 'Speaker', width: 15, dataIndex: 'speaker', key: 'speaker' },
  { title: 'Title', width: 300, dataIndex: 'title', key: 'title' },
  { title: 'Source', width: 20, dataIndex: 'source', key: 'source' },
  { title: 'Year', width: 5, dataIndex: 'year', key: 'year' },
  { title: 'Area', width: 5, dataIndex: 'area', key: 'area' },
  { title: 'Paper', width: 5, dataIndex: 'paper', key: 'paper', render: link => <a href='https://arxiv.org/abs/2109.08585'>{link}</a> },
  { title: 'Slides', width: 5, dataIndex: 'slides', key: 'slides', render: link => <a href='https://arxiv.org/abs/2109.08585'>{link}</a> },
];
  
const data = [
  {
    date: '22-01-03',
    speaker: '조준한',
    title: 'Non-local Neural Networks',
    source: 'AAAI',
    year: '2019',
    area: 'NLP',
    paper: '[link]',
    slides: '[link]',
  },
];

function Seminar() {
  return (
    <>
      <Title>Seminar</Title>
      <Wrapper>
        <Table 
          columns={columns} 
          dataSource={data} 
          scroll={{ x: 1300 }} 
          pagination={false}
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

export default Seminar;


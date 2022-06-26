import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";
import { Table } from 'antd';

function Seminar() {
  const [seminarInfo, setSeminarInfo] = useState('');

  const seminarInfoApi = async () => {
    axios.get("http://localhost:5000/seminar/").then((res) => {
      setSeminarInfo(res.data);
      console.log(res.data);
    });
  };

  const columns = [
    { title: 'Date', width: 80, dataIndex: 'date', key: 'date' },
    { title: 'Speaker', width: 80, dataIndex: 'speaker', key: 'speaker' },
    { title: 'Title', width: 200, dataIndex: 'title', key: 'title' },
    { title: 'Source', width: 80, dataIndex: 'source', key: 'source' },
    { title: 'Year', width: 80, dataIndex: 'year', key: 'year' },
    { title: 'Area', width: 80, dataIndex: 'area', key: 'area' },
    { title: 'Paper', width: 80, dataIndex: 'paper', key: 'paper', render: (value) => <a href='paper'>[link]</a> },
    { title: 'Slides', width: 80, dataIndex: 'slides', key: 'slides' , render: (value) => <a href=''>[link]</a> },
  ];
  

  useEffect(() => {
    seminarInfoApi();
  }, []);

  return (
    <>
      <Title>Seminar</Title>
      <Wrapper>
        <Table 
          columns={columns} 
          dataSource={seminarInfo.items} 
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


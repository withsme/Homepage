import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from "styled-components";
import { Collapse } from 'antd';
import 'antd/dist/antd.less';

const { Panel } = Collapse;

function Publications() {
  const [sheetInfo, setSheetInfo] = useState(null);

  const publicationInfoApi = async () => {
    axios.get("http://localhost:5000/publication/").then((res) => {
      excelManufacture(res.data)
      //setSheetInfo(res.data); 
    });
  };

  const excelManufacture = (rawData)=>{
    let arr = [];
    for(var key in rawData){
      let obj = {};
      if(key === "Registered Patents")
        obj['name']='Registered Patents / Patent Application'; // 약간 야매 .... 
      else
        obj['name'] = key;
      
      obj['values'] = rawData[key];
      arr.push(obj);
    }
    // console.log(arr);
    setSheetInfo(arr);
  }

  const renderFiltering = sheetInfo && sheetInfo.map((sheet, index)  => { // {} 처리 
    return (
      <Panel header={sheet.name} key={sheet.name} style={{ fontSize:"25px"}}>
        {
          sheet.values && sheet.values.map((value)  => { 
            return (
              <Content>  
                {value.Title}
                <p> {value.People} </p>
              </Content>
            )
          })
        }
      </Panel>
    )
  })

  useEffect(() => {
    publicationInfoApi();
  }, []);
  
  return (
    <>
      <Title>
        Publications
      </Title>
      <Wrapper>
        <Collapse style={{ backgroundColor:"white"}} bordered={false}>
          {renderFiltering}
        </Collapse>
      </Wrapper>
    </>
  );
};


const Wrapper = styled.div`
  font-family: 'LatoRegular';
  padding: 4% 5% 3% 5%;
  font-size: 1rem;
`;

const Title = styled.div`
  height: 8rem;
  font-size: 3.8rem;
  font-weight: 600;
  text-align: center;
  padding: 1.8% 0% 10% 0%;
  bolder: 0px;
`;

const Content = styled.div`
  font-size: 1rem;
  font-weight: 200;

  p {
    padding: 0.2% 0% 0.5% 0%;
    font-family: 'LatoBold';
    color: #1B5D2B;
  }
`;

export default Publications;
                          

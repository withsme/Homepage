import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from "styled-components";
import { Collapse } from 'antd';
import 'antd/dist/antd.min.css';

const { Panel } = Collapse;

function Publications() {
    const [sheetInfo, setSheetInfo] = useState('');

    const publicationInfoApi = async () => {
      axios.get("http://localhost:5000/publication/").then((res) => {
        setSheetInfo(res.data); 
      });
    };

    // function temp(values) {
    //     console.log(values);
    //     return (
    //       <Content>  
    //         {values.Title}
    //         <p> {values.People} </p>
    //       </Content>
    //     )
    // }

    // const renderFilterValues = (filterValues) => {
    //   switch(filterValues) {
    //     case 'International Journal Papers' :
    //       sheetInfo.InternationalJournalPapers && sheetInfo.InternationalJournalPapers.map((values)  => { 
    //         return (
    //           <Content>  
    //             {values.Title}
    //             <p> {values.People} </p>
    //           </Content>
    //         )
    //       })
    //       break;
    //     case 'Domestic Journal Papers' :
    //       sheetInfo.DomesticJournalPapers && sheetInfo.DomesticJournalPapers.map((values)  => { 
    //         temp(values);
    //       })
    //       break;
    //     case 'International Conference Papers' :
    //       sheetInfo.InternationalConferencePapers && sheetInfo.InternationalConferencePapers.map((values)  => { 
    //         temp(values);
    //       })
    //       break;
    //     case 'International Workshop Papers' :
    //       sheetInfo.InternationalWorkshopPapers && sheetInfo.InternationalWorkshopPapers.map((values)  => { 
    //         temp(values);
    //       })
    //       break;
    //     case 'Domestic Conference Papers' :
    //       sheetInfo.DomesticConferencePapers && sheetInfo.DomesticConferencePapers.map((values)  => { 
    //         temp(values);
    //       })
    //       break;
    //     case 'Registered Patents' :
    //       sheetInfo.RegisteredPatents && sheetInfo.RegisteredPatents.map((values)  => { 
    //         temp(values);
    //       })
    //       break;
    //     case 'Book' :
    //       sheetInfo.Book && sheetInfo.Book.map((values)  => {
    //         temp(values);
    //       })
    //       break;
    //   }
    // }

    // const renderFiltering = sheetInfo.SheetName && sheetInfo.SheetName.map((filter, index)  => { // {} 처리 
    //   return (
    //     <Panel header={filter.name} key={filter.name} style={{ fontSize:"25px"}}>
    //       {renderFilterValues(filter.name)}
    //     </Panel>
    //   )
    // })

    const renderFiltering = sheetInfo.SheetName && sheetInfo.SheetName.map((filter, index)  => { // {} 처리 
      return (
        <Panel header={filter.name} key={filter.name} style={{ fontSize:"25px"}}>
          {
            sheetInfo.InternationalJournalPapers && sheetInfo.InternationalJournalPapers.map((values)  => { 
              return (
                <Content>  
                  {values.Title}
                  <p> {values.People} </p>
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
                          

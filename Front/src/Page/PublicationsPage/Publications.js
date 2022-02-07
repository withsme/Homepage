import React from 'react';
import styled from "styled-components";

function Publications() {
    return (
        <>
            <Title>
                Publications
            </Title>
            <Wrapper>
                <SubTitle>
                    
                </SubTitle>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  padding: 5% 2% 3% 7%;
  font-size: 1rem;
`;

const Title = styled.div`
  height: 8rem;
  font-size: 3.8rem;
  font-weight: 600;
  text-align: center;
  padding: 1.8% 0% 10% 0%;
  border: 0px;
`;

const SubTitle = styled.div`
  height: 4.3rem;
  padding: 1% 1% 1% 15%;
  background-color: lightgray;
  border: 0px;
  color: darkgreen;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Content = styled.div`
  padding: 0% 10% 5% 5%;
  color: black;

  p {
    padding: 0% 0% 0% 4%;
    font-size: 1rem;
  }
`;

export default Publications;
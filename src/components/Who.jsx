import React from 'react'
import styled from "styled-components"
import Test1 from "./Test1"


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
aling-items: center;
justify-content: space-between;
scroll-snap-align: center;
`

const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
`;

const Left = styled.div`
flex:2;
padding: 0px 0px 0px 70px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px
`;

const Title = styled.h1`
font-size: 60px;

`;

const WhatIdo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

const Line = styled.img`
height: 5px;

`;

const Subtitle = styled.h2`
color: #da4ea2;
`;

const Desc = styled.p`
font-size: 24px;
color: lightgray;
`;



const Right = styled.div`
flex:3;
position: relative;
`;
const Img = styled.img`
width: 800px;
height: 600px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@keyframes animate {
  100%{
    transform: translateY(20px);
  }
}
`;

const Button2 = styled.button`
width: 110px;
padding: 10px;
background-color: #da4ea2;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`;


const Who = () => {
  return (
    <Section>
     
      <Container>
        
        <Right>
             {/* 3d model */}
             <Test1/>
        </Right>
        <Left>
          <Title>Think outside the square space.</Title>
          <WhatIdo>
            <Line src="./img/line.png" />
            <Subtitle>Who I Am</Subtitle>
          </WhatIdo>
          <Desc>a creative programmer and developers with a passion for arts.</Desc>
        <Button2>See my Works</Button2>
        </Left>
      </Container>
    </Section>
  )
}

export default Who
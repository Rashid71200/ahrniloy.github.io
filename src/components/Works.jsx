import React, { useState } from 'react'
import styled from "styled-components"
import WebDesign from './WebDesin'
import Development from './Development'
import Illustration from './Illustration'
import Product from './Product'
import Media from './Media'


const data = [
  "Programming in Python",
  "Web Design with React",
  "Android Apps Development",
  "CircuitPython",
  "IT Automation",
];

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`;

const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 20px;
`;

const Right = styled.div`
flex: 1;
`;

const ListItems = styled.li`
font-size: 50px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 1px white;
position: relative;
::after{
  content: "${(props)=>props.text}";
  position: absolute;
  top: 0;
  left: 0;
  color: pink;
  width: 0px;
  overflow: hidden;
  white-space: nowrap;
}

&:hover{
  ::after{
    animation: moveText 0.5s linear both;

    @keyframes moveText {
      to{
        width: 100%;
      }
    }
  }
}
`;

const Works = () => {
  const [work,setWork] = useState("Web Design")
  return (
    <Section>
      <Container>
        <Left>
        <List>
            {data.map((item) => (
              <ListItems key={item} text={item} onClick={()=>setWork(item)}>
                {item}
              </ListItems>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Programming in Python" ? (<WebDesign />):
           work === "Web Design with React" ? (<Development />):
            work === "Android Apps Development" ? (<Illustration />):
             work === "CircuitPython" ? (<Product />):
             work === "IT Automation" ? (<Media />):
             (<Media />) }
        </Right>
      </Container>
    </Section>
  )
}

export default Works
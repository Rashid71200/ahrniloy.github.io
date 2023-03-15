
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from "react";
import styled from "styled-components"
import Navbar from './Navbar'
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";



const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
aling-items: center;
justify-content: space-between;
scroll-snap-align: top;
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
font-size: 80px;
`;
const Title1 = styled.h1`
font-size: 50px;
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
width: 100px;
padding: 10px;
background-color: #da4ea2;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`;


const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Hello, I'm</Title>
          <Title1 >Azaharul Rashid</Title1>
          <WhatIdo>
            <Line src="./img/line.png" />
            <Subtitle>What I Do</Subtitle>
          </WhatIdo>
          <Desc>I am a software developer proficient in Python, Flutter, React, and Micropython programming. I have a passion for creating innovative software solutions that solve complex problems.</Desc>
        <Button2>Learn More</Button2>
        </Left>
        <Right>
        <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
             
            <Img src="./img/moon1.png" /> 
        </Right>
      </Container>
    </Section>
  )
}

export default Hero
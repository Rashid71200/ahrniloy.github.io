import React, { useState, useRef, Suspense } from 'react';
import styled from "styled-components"
//import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Earth from './Earth'
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
height: 100vh;
position: relative;
scroll-snap-align: center;
display: flex;
aling-items: center;
justify-content: space-between;


`;

const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
gap: 50px;


`;

const Left = styled.div`
flex:1;
display: flex;

justify-content: center;

align-items: center;
`
;
const Title = styled.h1`
font-weight: 200;
`;

const From = styled.form`
width: 500px;
display: flex;

flex-direction: column;

gap: 20px

`;

const Input = styled.input`
padding: 20px;
background-color: #e8e6e6;
border: none;
border-radius: 5px;

`;

const TextArea = styled.textarea`
padding: 20px;
background-color: #e8e6e6;
border: none;
border-radius: 5px;
`;

const Button = styled.button`
background-color: #da4ea2;
color: white;
border: none;
font-weight: bold;
cursor: pointer;
border-radius: 5px;
padding: 15px
`;


const Right = styled.div`
flex:1;
`;



const Contact = () => {
    const ref = useRef()
const [success,setSuccess] = useState(null)

const handelSubmit =e=>{
    e.preventDefault() 

    emailjs.sendForm('service_ujyvzpl', 'template_1bhc9kt', ref.current, 'sN8bAzmhBfFV6Zd_G')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
      });

}


  return (
    <Section>
        <Container>
            <Left>
                <From ref={ref} onSubmit={handelSubmit}>
                    <Title>Contact Me</Title>
                    <Input placeholder="Name" name="name"/>
                    <Input placeholder="Email" name="email"/>
                    <TextArea placeholder="Write your message" name="message" rows={10}/>
                    <Button type="submit">Send</Button>
                    {success &&
                    "Your message has been sent. We'll get back to you soon :"}
                </From>
            </Left>
            <Right>
            <Canvas>
            <Stage environment="city" intensity={0.6}>
            <Earth />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
            
        </Canvas>
                
            </Right>
        </Container>
    </Section>
  )
}

export default Contact
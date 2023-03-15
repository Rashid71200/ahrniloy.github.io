import React from 'react'
import styled from "styled-components"
//import logo from '../img/logo.png'; // with import

const Section = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 160vh;
  
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
display: flex;
align-items: center;
padding: 0px 0px 0px 0px;
gap: 50px;
`;
const Icons = styled.div`
display: flex;
align-items: center;
padding: 0px 10px 0px 0px;
gap: 20px;
`;

const List = styled.ul`
display: flex;
align-items: center;
gap: 50px;
list-style: none;
`;
const ListItems = styled.li``;

const Logo = styled.img``;
const Icon = styled.img``;
const Button = styled.button`
width: 100px;
padding: 10px;
background-color: #da4ea2;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
         
          <List>
            <ListItems>Home</ListItems>
            <ListItems>Studio</ListItems>
            <ListItems>Works</ListItems>
            <ListItems>Contact</ListItems>
          </List>
          
        </Links>
        <Icons>
            <Icon src="./img/search.png"/>
            <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar


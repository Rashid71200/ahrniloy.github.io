import React from 'react'
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components'
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'

const Container = styled.div`
height: 100vh;
width: 100%
scroll-snap-align: center;
`

const Title = styled.h1`
font-weight: 200;
`;



const Test1 = () => {
  return (
    <Container>
        <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1.5}/>
            <directionalLight position={[3,2,1]}/>

            <mesh>
                <boxGeometry args={[2,2,2,]}/>
                <meshStandardMaterial>
  
  <RenderTexture attach="map">
    <PerspectiveCamera makeDefault position={[0,0,2]} />
    <color attach="background" args={["#dc9dcd"]} />
    <Text fontSize={0.7} color="#555">
      Hello
    </Text>
  </RenderTexture>
</meshStandardMaterial>
            </mesh>
        </Canvas>
    </Container>
  )
}


export default Test1
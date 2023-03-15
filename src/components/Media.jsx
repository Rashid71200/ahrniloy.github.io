import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Pi from './Pi'

const Media = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
            <Pi />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
            
        </Canvas>
    )
}

export default Media
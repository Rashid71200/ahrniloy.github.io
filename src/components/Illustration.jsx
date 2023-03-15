import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Apple from './Apple'

const Illustration = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
            <Apple />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
    )
}

export default Illustration
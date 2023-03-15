import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Comp from './Comp'


const WebDesing = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
            <Comp />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
    )
}

export default WebDesing  //gltf-pipeline -i model.gltf -o modelDraco.gltf -d    gltf-pipeline -i scene.gltf -o model.gltf -d      cd C:\Users\azaha\OneDrive\Desktop\3d  npx gltfjsx model.gltf --transform
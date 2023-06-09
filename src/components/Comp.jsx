/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 model.gltf --transform
Author: Tyler P Halterman (https://sketchfab.com/tylerhalterman)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/desktop-computer-561abc2fc95941609fc7bc6f232895c2
Title: Desktop Computer
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/comp-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.5}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_4.geometry} material={materials['01___Default']} />
          <mesh geometry={nodes.defaultMaterial_5.geometry} material={materials['01___Default']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/comp-transformed.glb')

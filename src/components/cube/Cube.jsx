import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export const Cube = () => {
    const cubeRef = useRef();
  /* Animation */
  /* This hook allows you to execute code on every rendered frame, like running effects, updating controls, etc*/
  useFrame((state, delta) => {
    console.log(state, delta);
    cubeRef.current.rotation.y+=delta;
  });
  return (
    <>
      {/* Main light of our project */}
      <ambientLight></ambientLight>
      {/* Controls for moving the object */}
      <OrbitControls></OrbitControls>
      {/* 3D Object */}
      <mesh ref={cubeRef}>
        {/* All of these components are automatically attached to the mesh component*/}
        {/* Shape of a cube */}
        <boxGeometry args={[2,2,2]}></boxGeometry>
        {/* Material attached to the cube - It reacts to light */}
        <meshStandardMaterial color={"mediumpurple"}></meshStandardMaterial>
      </mesh>
    </>
  );
};

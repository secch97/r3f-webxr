import { Canvas } from "@react-three/fiber";
import React from "react";
import { Cube } from "./Cube";

export const CubeContainer = () => {
  return (
    <>
      {/* Main Tag for React Three Fiber as it sets up the rendering process*/}
      <Canvas>
        <Cube></Cube>
      </Canvas>
    </>
  );
};

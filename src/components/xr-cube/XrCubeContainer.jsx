import { Canvas } from "@react-three/fiber";
import React from "react";
import { XrCube } from "./XrCube";
import { ARButton, XR } from "@react-three/xr";

export const XrCubeContainer = () => {
  return (
    <>
      {/* Inits an WebXR Session - VR, AR*/}
      <ARButton
        
      />{" "}
      {/* Main Tag for React Three Fiber as it sets up the rendering process*/}
      <Canvas>
        {/* Wrap elements that you wish to support VR or AR*/}
        <XR>
          <XrCube></XrCube>
        </XR>
      </Canvas>
    </>
  );
};

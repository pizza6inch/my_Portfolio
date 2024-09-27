import React, { Suspense, useState, useRef, useEffect } from "react";
import { useInterval } from "react-use";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Mesh } from "three";

import CanvasLoader from "../Loader";
import useDeviceType from "../../hooks/useDeviceType";

type PizzaProps = {
  isMobile: Boolean;
  rotation: number[];
};

const Pizza = ({ isMobile, rotation }: PizzaProps) => {
  const pizza = useGLTF("./pizza/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <spotLight
        position={[0, 5, 8]}
        target={pizza.scene}
        angle={0.2}
        penumbra={1}
        intensity={200}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <primitive
        object={pizza.scene}
        scale={isMobile ? 0.5 : 1}
        position={isMobile ? [0, -1, 0] : [0, -2, 0]}
        rotation={rotation}
      />
    </mesh>
  );
};

const PizzaCanvas = () => {
  const deviceType = useDeviceType();
  const [rotation, setRotation] = useState([0, -2.5, 0]);
  // useInterval(() => {
  //   setRotation([rotation[0], rotation[1] + 0.01, rotation[2]]);
  // }, 1000 / 60);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Pizza isMobile={deviceType === "mobile"} rotation={rotation} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default PizzaCanvas;

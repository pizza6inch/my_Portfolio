import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const BigPizza = () => {
  const bigPizza = useGLTF("./bigPizza/scene.gltf");

  return (
    <primitive
      object={bigPizza.scene}
      scale={0.03}
      position-y={0}
      rotation-y={2}
    />
  );
};

const BigPizzaCanvas = () => {
  return (
    <div className=" w-full h-full cursor-grab">
      <Canvas
        shadows
        // frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls autoRotate enableZoom={false} />
          <ambientLight intensity={1} />
          <BigPizza />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BigPizzaCanvas;

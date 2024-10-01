import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import useDeviceType from "../../hooks/useDeviceType";

type PizzaProps = {
  isMobile: boolean;
};

const Pizza = ({ isMobile }: PizzaProps) => {
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
        rotation={[0, -2.5, 0]}
      />
    </mesh>
  );
};

const PizzaCanvas = () => {
  const deviceType = useDeviceType();

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={1}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: false }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} /> */}
        <Pizza isMobile={deviceType === "mobile"} />
      </Suspense>
    </Canvas>
  );
};

export default PizzaCanvas;

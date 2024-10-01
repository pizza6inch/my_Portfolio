import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props: { imgUrl: string }) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} />
      </mesh>
    </>
  );
};

const BallCanvas = ({ icon }: { icon: string }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: false }}>
      <Suspense fallback={<CanvasLoader />}>
        <Ball imgUrl={icon} />
      </Suspense>
      {/* <Preload all /> */}
    </Canvas>
  );
};

export default BallCanvas;

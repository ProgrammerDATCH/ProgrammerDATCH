import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { pro } from '../../assets';
import { useRef } from "react";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  const proBall = useRef()

  useFrame((state, delta)=>{
    proBall.current.rotation.x -= delta * 0.3;
    proBall.current.rotation.y -= delta *  0.7;
  })

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} ref={proBall}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#121212'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const ProfileBall = () => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
          autoRotate
          rotation={[1,1,1]}
          autoRotateSpeed={4}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ball imgUrl={pro} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ProfileBall;

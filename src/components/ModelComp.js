import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const ModelComp = ({ modelPath, scale, position }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.y += 0.01));

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      scale={hovered ? scale * 1.2 : scale}
      position={position}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    />
  );
};

export default ModelComp;

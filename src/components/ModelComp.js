import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const ModelComp = ({ modelPath, scale, position }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  const [hovered, SetHover] = useState(false);

  useFrame((state, delta) => (re.current.rotation.y += 0.01));

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      scale={hovered ? scale * 1.2 : scale}
      position={position}
      OnPointOver={() => SetHover(true)}
      OnPointOut={() => SetHover(false)}
    />
  );
};

import React from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import ModelViewer from './ModelViewer';

import './style.css';

export default function App() {
  return (
    <Canvas>
      <OrbitControls />
      {/* Stars component is missing, make sure to add it if needed */}
      <ambientLight intensity={0.5} />
      <spotLight position={[-10, -10, -10]} angle={0.15} />
      <pointLight position={[-10, -10, -10]} />
      <ModelViewer modelPath="../public/art_gallery.glb" />
    </Canvas>
  );
}

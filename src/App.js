import * as React from 'react';
import './style.css';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[-10, -10, -10]} angle={0.15} />
      <pointLight position={[-10, -10, -10]} />
      <ModelViewer modelPath="../public/art_gallery.glb" />
    </Canvas>
  );
}

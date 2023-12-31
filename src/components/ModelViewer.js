import React, { Suspense } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import ModelComp from './ModelComp';

const ModelViewer = ({ modelPath, scale = 10, position = [0, 0, 0] }) => {
  return (
    <Suspense fallback={null}>
      <ModelComp modelPath={modelPath} scale={scale} position={position} />
      <OrbitControls />
    </Suspense>
  );
};

export default ModelViewer;

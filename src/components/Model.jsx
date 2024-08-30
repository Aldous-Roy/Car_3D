import React from 'react';
import { useGLTF } from '@react-three/drei';

const ModelViewer = () => {
  const { scene } = useGLTF('/scene.gltf'); // public can be plain
  return (
    <primitive object={scene} scale={75} />
  );
};

export default ModelViewer;
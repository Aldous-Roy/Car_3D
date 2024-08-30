import React from 'react';
import { useFrame } from '@react-three/fiber';

const Cube = () => {
  const meshRef = React.useRef();

  // Rotate the cube on each frame
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[5, 5, 5]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default Cube;
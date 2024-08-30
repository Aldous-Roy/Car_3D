import React from 'react';
import { MeshNormalMaterial } from '@react-three/fiber'; // Corrected import
import { OrbitControls } from '@react-three/drei'; // Corrected import

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial /> {/* Corrected usage */}
      </mesh>
    </>
  );
};

export default Experience;
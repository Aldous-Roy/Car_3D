import React from 'react'

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../components/Model'

const Car = () => {
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center">
      <Canvas camera={{ position: [10, 10, 0] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-10,-10,-10]} intensity={1} />
        <Model />
        <OrbitControls
        enablePan={true}          // Allows panning (moving in X and Y)
        enableRotate={true}      // Disable rotation to lock the Z axis
        enableZoom={true}         // Enable zooming if needed
        maxAzimuthAngle={Math.PI / 2}  // Restrict horizontal rotation
        // minAzimuthAngle={-Math.PI / 2}
        maxPolarAngle={Math.PI / 2}    // Restrict vertical rotation
        // minPolarAngle={Math.PI / 2} 
        />
      </Canvas>
    </div>
    </div>
  )
}

export default Car
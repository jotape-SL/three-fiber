import './styles.css';
//dependencies
import React, { Suspense } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

//components
import Background from './components/Background';
import TextSection from './components/TextSection';
import Box from './components/Box';
import Sphere from './components/AnimatedSphere';
import Lightsaber from './components/Lightsaber';

export default function App() {
  return (
    <Wrapper className='App'>
      <Background />
      <TextSection />
      <Canvas className='canvas' camera={{ position: [0, -30, 0] }}>
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <pointLight position={[-5, 20, 10]} intensity={2.5} />
          <pointLight position={[-5, 0, 10]} intensity={2.5} />
          <Lightsaber />
        </Suspense>
      </Canvas>
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 500px;
    &:hover {
      cursor: grab;
    }
    &:active {
      cursor: grabbing;
    }
  }
`;

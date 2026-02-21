import { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, Html, useGLTF } from '@react-three/drei';

function ToastModel() {
  const gltf = useGLTF('/models/toast.glb');
  const scene = useMemo(() => gltf.scene.clone(), [gltf.scene]);
  return <primitive object={scene} scale={1.5} position={[0, -1.1, 0]} />;
}

useGLTF.preload('/models/toast.glb');

export default function Toast3D() {
  return (
    <div className="h-[360px] w-full overflow-hidden rounded-3xl border border-cream/20 bg-gradient-to-b from-brown/60 to-redAccent/60">
      <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0.5, 4], fov: 45 }} shadows={false}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[2, 4, 5]} intensity={1.5} />
        <Suspense fallback={<Html center><p className="text-cream">Warming the toast...</p></Html>}>
          <Float speed={1} rotationIntensity={0.35} floatIntensity={0.5}>
            <ToastModel />
          </Float>
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}

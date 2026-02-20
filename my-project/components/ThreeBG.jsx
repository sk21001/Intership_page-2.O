import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Float, Text, Box } from "@react-three/drei";

// Simple animated 3D background: starfield with camera controls
export default function ThreeBG({ className = "", style = {} }) {
  return (
    <div
      className={`absolute inset-0 z-0 ${className}`}
      style={{ pointerEvents: "none", ...style }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0.5}
          fade
          speed={1}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}

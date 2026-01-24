import { Canvas } from "@react-three/fiber";
import Lanyard from "./Lanyard";
import { useLocation } from "react-router-dom";
import * as THREE from "three";
import { useEffect } from "react";

export default function LanyardCanvas() {
  const location = useLocation(); // gunakan pathname sebagai key
  useEffect(() => {
    return () => {
      const r3fCanvas = document.querySelector("canvas[data-engine='three']");
      const gl = r3fCanvas?.getContext("webgl");
      gl?.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);
  return (
    <div className="relative z-0 w-full h-screen flex justify-center items-center">
      <Canvas
        key={location.pathname} // pastikan Canvas di-unmount saat route berubah
        camera={{ position: [0, 0, 20], fov: 20 }}
        gl={{ alpha: true }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), 0)}
      >
        <Lanyard />
      </Canvas>
    </div>
  );
}

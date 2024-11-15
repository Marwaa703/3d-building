// components/Camera.jsx
import  { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const FocusCamera = () => {
  const controlsRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    // Set camera at eye level (around 1.7m)
    camera.position.set(0, 1.7, 5); // Eye-level height (1.7m) and back a bit for a better view
    camera.rotation.set(0, 0, 0); // Keep it level
    camera.lookAt(0, 1.5, 0); // Focus on the center of the building
    controlsRef.current.update();
  }, [camera]);

  return <OrbitControls ref={controlsRef} enableZoom={true} />;
};

export default FocusCamera;

import  { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const FocusCamera = () => {
  const controlsRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 1.7, 5); 
    camera.rotation.set(0, 0, 0);
    camera.lookAt(0, 1.5, 0); 
    controlsRef.current.update();
  }, [camera]);

  return <OrbitControls ref={controlsRef} enableZoom={true} />;
};

export default FocusCamera;

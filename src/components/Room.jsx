import { useState } from "react";
import PropTypes from 'prop-types';
import Wall from "./Wall";
import RoomLight from "./Light";

const Room = ({ position }) => {
  const [lightOn, setLightOn] = useState(false);

  const toggleLight = () => {
    setLightOn((prevState) => !prevState);
  };

  return (
    <group position={position}>
      {/* Front wall with a window */}
      <Wall
        position={[0, 0, 0.5]}
        rotation={[0, 0, 0]}
        initialColor="lightblue"
        isWindow
      />
      {/* Back wall */}
      <Wall
        position={[0, 0, -0.5]}
        rotation={[0, Math.PI, 0]}
        initialColor="gray"
      />
      {/* Left wall */}
      <Wall
        position={[-1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        initialColor="gray"
      />
      {/* Right wall */}
      <Wall
        position={[1, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        initialColor="gray"
      />
      {/* Floor */}
      <Wall
        position={[0, -0.5, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        initialColor="lightgray"
      />
      {/* Ceiling */}
      <Wall
        position={[0, 0.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        initialColor="lightgray"
      />
      {/* Light Switch Button */}
      <mesh
        position={[0, 0.4, 0]}
        onClick={toggleLight}
        scale={[0.5, 0.5, 0.5]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <circleGeometry args={[0.5, 32]} />
        <meshStandardMaterial color={lightOn ? "green" : "red"} />
      </mesh>
      {/* Room Light */}
      <RoomLight position={[0, 0.5, 0]} isOn={lightOn} />
    </group>
  );
};

Room.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Room;

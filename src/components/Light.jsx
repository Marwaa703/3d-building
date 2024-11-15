const RoomLight = ({ position, isOn }) => {
  return isOn ? (
    <pointLight position={position} intensity={1} color="yellow" />
  ) : null; // No light when it's off
};

export default RoomLight;

import PropTypes from "prop-types";

const RoomLight = ({ position, isOn }) => {
  return isOn ? (
    <pointLight position={position} intensity={1} color="yellow" castShadow />
  ) : null;
};

RoomLight.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  isOn: PropTypes.bool.isRequired,
};

export default RoomLight;

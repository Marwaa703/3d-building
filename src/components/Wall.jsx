import { useState } from "react";
import PropTypes from 'prop-types';

const Wall = ({ position, rotation, initialColor, isWindow, onClick }) => {
  const [color, setColor] = useState(initialColor);

  const handleClick = () => {
    setColor((prevColor) =>
      prevColor === initialColor ? "lightcoral" : initialColor
    );
    if (onClick) onClick(); 
  };

  return (
    <mesh position={position} rotation={rotation} onClick={handleClick}>
      <planeGeometry args={[2, 1]} />
      <meshStandardMaterial
        color={color}
        opacity={isWindow ? 0.5 : 1}
        transparent={isWindow}
      />
    </mesh>
  );
};

Wall.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  rotation: PropTypes.arrayOf(PropTypes.number).isRequired,
  initialColor: PropTypes.string.isRequired,
  isWindow: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Wall;

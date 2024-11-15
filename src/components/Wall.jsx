import { useState } from "react";

const Wall = ({ position, rotation, initialColor, isWindow, onClick }) => {
  const [color, setColor] = useState(initialColor);

  const handleClick = () => {
    setColor((prevColor) =>
      prevColor === initialColor ? "lightcoral" : initialColor
    );
    if (onClick) onClick(); // Pass callback if needed for light toggle
  };

  return (
    <mesh position={position} rotation={rotation} onClick={handleClick}>
      <planeGeometry args={[2, 1]} />
      <meshStandardMaterial
        color={color}
        opacity={isWindow ? 0.5 : 1} // Windows are semi-transparent
        transparent={isWindow}
      />
    </mesh>
  );
};

export default Wall;

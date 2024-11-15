
import Room from "./Room";

const Building = () => {
  return (
    <>
      <Room position={[0, 0.5, 0]} /> {/* Floor 1 */}
      <Room position={[0, 1.5, 0]} /> {/* Floor 2 */}
      <Room position={[0, 2.5, 0]} /> {/* Floor 3 */}
    </>
  );
};

export default Building;

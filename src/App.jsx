import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import MapComponent from "./components/Map";
import Building from "./components/Building";
import FocusCamera from "./components/Camera";

const geolocation = {
  lat: 37.7749,
  lon: -122.4194,
};

const App = () => {
  const [mapLoaded] = useState(false);
  useEffect(() => {
    if (mapLoaded) {
      console.log("Map is loaded, now show the building.");
    }
  }, [mapLoaded]);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      <MapComponent geolocation={geolocation} />
      <Canvas style={{ height: "100vh", width: "100vw" }}>
        <ambientLight color="#ffffff" />
        <directionalLight color="#ffffff" />
        <Building />
        <FocusCamera />
      </Canvas>
    </div>
  );
};

export default App;

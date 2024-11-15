import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import MapComponent from "./components/Map";
import Building from "./components/Building";
import FocusCamera from "./components/Camera";

// Example geolocation (latitude, longitude)
const geolocation = {
  lat: 37.7749, // Latitude for San Francisco
  lon: -122.4194, // Longitude for San Francisco
};

const App = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  // After the map is loaded, display the building
  useEffect(() => {
    if (mapLoaded) {
      console.log("Map is loaded, now show the building.");
    }
  }, [mapLoaded]);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      {/* Map Component */}
      <MapComponent geolocation={geolocation} />

      {/* 3D building visualization */}
      <Canvas style={{ height: "100vh", width: "100vw" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Building />
        <FocusCamera />
      </Canvas>
    </div>
  );
};

export default App;

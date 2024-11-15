import React, { useEffect, useState } from "react";
import { Map } from "react-map-gl"; // Use Map component instead of StaticMap
import "mapbox-gl/dist/mapbox-gl.css"; // Import Mapbox CSS for rendering

const MapComponent = ({ geolocation }) => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: geolocation.lat,
    longitude: geolocation.lon,
    zoom: 12, // Adjust zoom level based on your location
  });

  useEffect(() => {
    console.log("MapComponent loaded with geolocation:", geolocation);
  }, [geolocation]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, // Ensure the map is behind the 3D canvas
      }}
    >
      <Map
        initialViewState={viewport}
        onMove={({ viewState }) => setViewport(viewState)}
        mapStyle="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" // Direct OpenStreetMap tile URL
        mapboxApiAccessToken={null} // No Mapbox token required
        onLoad={() => console.log("Map Loaded")}
      />
    </div>
  );
};

export default MapComponent;

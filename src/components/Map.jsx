import { useEffect, useState } from "react";
import { Map } from "react-map-gl";
import PropTypes from "prop-types";
import "mapbox-gl/dist/mapbox-gl.css";

const MapComponent = ({ geolocation }) => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: geolocation.lat,
    longitude: geolocation.lon,
    zoom: 12,
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
        zIndex: 0,
      }}
    >
      <Map
        initialViewState={viewport}
        onMove={({ viewState }) => setViewport(viewState)}
        mapStyle="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        mapboxApiAccessToken={null}
        onLoad={() => console.log("Map Loaded")}
      />
    </div>
  );
};

MapComponent.propTypes = {
  geolocation: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
  }).isRequired,
};

export default MapComponent;

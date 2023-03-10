import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const latPosition = 44.9778;
const lngPosition = -93.265;

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 44.9778,
  lng: -93.265,
};

const position = {
  lat: latPosition,
  lng: lngPosition,
};

function Maps() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <>
          <Marker position={position} />
        </>
      </GoogleMap>
    </LoadScript>
  );
}
export default Maps;

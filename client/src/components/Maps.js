import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

function Maps(yourLocation) {
  const [center, setCenter] = useState(null);
  const [position, setPosition] = useState(null);

  // console.log(yourLocation.yourLocation);
  // const center = {
  //   lat: yourLocation.yourLocation.latPosition,
  //   lng: yourLocation.yourLocation.lngPosition,
  // };

  // const position = {
  //   lat: yourLocation.yourLocation.latPosition,
  //   lng: yourLocation.yourLocation.lngPosition,
  // };
  useEffect(() => {
    setCenter({
      lat: yourLocation.yourLocation.latPosition,
      lng: yourLocation.yourLocation.lngPosition,
    });

    setPosition({
      lat: yourLocation.yourLocation.latPosition,
      lng: yourLocation.yourLocation.lngPosition,
    });
  }, []);

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
          <>
            <Marker position={position} />
          </>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
export default Maps;

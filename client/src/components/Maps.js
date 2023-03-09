import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Maps = () => {
  const locationLat = 50;
  const locationLon = 50;
  const locationName = "Here";
  const defaultProps = {
    center: {
      lat: 44.9778,
      lng: -93.265,
    },
    zoom: 11,
  };
  return (
    // Important! Always set the container height explicitly

    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyDMJFn9TYyuqBnvP1laSIZq2FV6nCZiiCM",
          language: "en",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={locationLat}
          lng={locationLon}
          text={locationName}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Maps;

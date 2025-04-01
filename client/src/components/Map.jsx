import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

const Map = ({ selectedProfile }) => {
  useEffect(() => {
    mapboxgl.accessToken = "your_mapbox_access_token";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [selectedProfile.longitude, selectedProfile.latitude],
      zoom: 12,
    });

    new mapboxgl.Marker()
      .setLngLat([selectedProfile.longitude, selectedProfile.latitude])
      .addTo(map);
  }, [selectedProfile]);

  return <div id="map" className="h-64 w-full"></div>;
};

export default Map;

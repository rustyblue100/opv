import type { NextPage } from "next";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";

const Map: NextPage = () => {
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | any>(null);

  useEffect(() => {
    const markers = [
      {
        city: "montreal",
        country: "Canada",
        latCoord: 45.523592397441654,
        longCoord: -73.5831695501995,
      },
    ];

    const geojson = {
      type: "Feature",
      features: markers.map((marker) => ({
        properties: {
          city: marker.city,
          country: marker.country,
          iconSize: [30, 42],
        },
        geometry: {
          type: "Point",
          coordinates: {
            lat: marker.latCoord,
            lng: marker.longCoord,
          },
        },
      })),
    };

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ?? "";
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [45.50192051479222, -73.56493220397448], // center map on Chad
      zoom: 1.8,
    });

    map.current.on("load", () => {
      geojson.features.forEach((marker) => {
        // create a DOM element for the marker
        const markerIcon = document.createElement("div");
        markerIcon.className = "location-marker";
        markerIcon.style.backgroundImage = "url(/location-marker.png)";
        markerIcon.style.backgroundRepeat = "no-repeat";
        markerIcon.style.backgroundSize = "contain";
        markerIcon.style.width = marker.properties.iconSize[0] + "px";
        markerIcon.style.height = marker.properties.iconSize[1] + "px";

        new mapboxgl.Marker(markerIcon)
          .setLngLat(marker.geometry.coordinates) // add marker to map

          .addTo(map.current);
      });
    });
  }, []);

  return (
    <div className="mt-24">
      <div className="map-container h-[600px]" ref={mapContainer} />
    </div>
  );
};
export default Map;

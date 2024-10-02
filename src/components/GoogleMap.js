import React, { useEffect, useRef } from "react";
/* global google */

const GoogleMap = ({ additionalMarkers }) => {
  const markersRef = useRef([]);
  const mapRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const initMap = () => {
      const center = { lat: 41.8353, lng: -87.623 };
      const marker = { lat: 41.83673, lng: -87.62597 };
      const mapElement = document.getElementById("map");

      if (mapElement) {
        mapRef.current = new window.google.maps.Map(mapElement, {
          center: center,
          zoom: 16,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_RIGHT,
          },
        });

        new window.google.maps.Marker({
          position: marker,
          map: mapRef.current,
          title: "Chicago Location",
        });

        const searchBox = new window.google.maps.places.SearchBox(
          inputRef.current
        );
        mapRef.current.controls[
          window.google.maps.ControlPosition.TOP_LEFT
        ].push(inputRef.current);

        mapRef.current.addListener("bounds_changed", () => {
          searchBox.setBounds(mapRef.current.getBounds());
        });

        let searchMarkers = [];
        searchBox.addListener("places_changed", () => {
          const places = searchBox.getPlaces();
          if (places.length === 0) return;

          searchMarkers.forEach((marker) => marker.setMap(null));
          searchMarkers = [];

          const bounds = new window.google.maps.LatLngBounds();
          places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) return;

            const searchMarker = new window.google.maps.Marker({
              map: mapRef.current,
              title: place.name,
              position: place.geometry.location,
            });
            searchMarkers.push(searchMarker);

            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });

          mapRef.current.fitBounds(bounds);
        });

        return () => {
          markersRef.current.forEach((marker) => marker.setMap(null));
          searchMarkers.forEach((marker) => marker.setMap(null));
          mapRef.current.controls[
            window.google.maps.ControlPosition.TOP_LEFT
          ].pop();
        };
      }
    };

    window.initMap = initMap;

    if (window.google && window.google.maps) {
      initMap();
    }
  }, []);

  useEffect(() => {
    if (mapRef.current && additionalMarkers) {
      markersRef.current.forEach((marker) => marker.setMap(null));
      markersRef.current = [];

      additionalMarkers.forEach((marker) => {
        const newMarker = new window.google.maps.Marker({
          position: marker.position,
          map: mapRef.current,
          title: marker.title || "Marker",
          icon: marker.icon,
        });
        markersRef.current.push(newMarker);
      });
    }
  }, [additionalMarkers]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search Box"
        style={{
          margin: "10px",
          color: "rgb(1, 1, 59)",
          height: "25px",
          borderRadius: "4px",
          padding: "4px",
          border: "white",
          marginLeft: "8%",
        }}
      />
      <div id="map" style={{ width: "100%", height: "600px" }}></div>
    </div>
  );
};

export default GoogleMap;

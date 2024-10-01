import React, { useEffect, useRef } from 'react';

const GoogleMap = ({ additionalMarkers }) => {
  const markersRef = useRef([]);
  const mapRef = useRef(null);
  const inputRef = useRef(null); // Ref for the search input

  useEffect(() => {
    // Initialize map function
    const initMap = () => {
      const center = { lat: 41.83530, lng: -87.62300 };
      const marker = { lat: 41.83673, lng: -87.62597 };
      const mapElement = document.getElementById('map');

      if (mapElement) {
        mapRef.current = new window.google.maps.Map(mapElement, {
          center: center,
          zoom: 16,
        });

        // Create initial marker
        new window.google.maps.Marker({
          position: marker,
          map: mapRef.current,
          title: "Chicago Location",
        });

        // Initialize search box
        const searchBox = new window.google.maps.places.SearchBox(inputRef.current);
        mapRef.current.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputRef.current);

        mapRef.current.addListener("bounds_changed", () => {
          searchBox.setBounds(mapRef.current.getBounds());
        });

        let searchMarkers = [];
        searchBox.addListener("places_changed", () => {
          const places = searchBox.getPlaces();
          if (places.length === 0) return;

          searchMarkers.forEach(marker => marker.setMap(null));
          searchMarkers = [];

          const bounds = new window.google.maps.LatLngBounds();
          places.forEach(place => {
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

        // Cleanup function
        return () => {
          markersRef.current.forEach(marker => marker.setMap(null)); // Cleanup existing markers
          searchMarkers.forEach(marker => marker.setMap(null)); // Cleanup search markers
          mapRef.current.controls[window.google.maps.ControlPosition.TOP_LEFT].pop(); // Remove the search box
        };
      }
    };

    // Ensure initMap is globally accessible
    window.initMap = initMap;

    // Check if Google Maps API is ready
    if (window.google && window.google.maps) {
      initMap();
    }
  }, []); // Initialize map only once

  useEffect(() => {
    // Update additional markers
    if (mapRef.current && additionalMarkers) {
      // Clear existing markers
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = []; // Reset markers array

      additionalMarkers.forEach((marker) => {
        const newMarker = new window.google.maps.Marker({
          position: marker.position,
          map: mapRef.current,
          title: marker.title || "Marker",
          icon: marker.icon,
        });
        markersRef.current.push(newMarker); // Store new marker
      });
    }
  }, [additionalMarkers]); // Update markers whenever `additionalMarkers` changes  

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search Box"
        style={{
          margin: '10px',
          color: 'rgb(1, 1, 59)',
          height: '25px',
          borderRadius: '4px',
          padding: '4px',
          border: 'white'
        }}
      />
      <div id="map" style={{ width: '100%', height: '600px' }}></div>
    </div>
  );
};

export default GoogleMap;

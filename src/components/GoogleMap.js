import { useEffect } from 'react';

const GoogleMap = ({ additionalMarkers }) => {
  useEffect(() => {
    const initMap = () => {
      const center = { lat: 41.83673, lng: -87.62597 };

      // Create a new map instance
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 16,
      });

      // Add a default marker for the map center
      new window.google.maps.Marker({
        position: center,
        map: map,
        title: "Chicago Location",
      });

      // Add additional markers dynamically
      if (additionalMarkers && additionalMarkers.length > 0) {
        additionalMarkers.forEach((marker) => {
          new window.google.maps.Marker({
            position: marker.position,
            map: map,
            title: marker.title || "Marker",
          });
        });
      }
    };

    // Initialize the map when Google Maps is ready
    if (window.google && window.google.maps) {
      initMap();
    } else {
      window.initMap = initMap;
    }
  }, [additionalMarkers]); // Re-run the effect whenever `additionalMarkers` changes

  return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
};

export default GoogleMap;

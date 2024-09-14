import { useEffect } from 'react';

const GoogleMap = () => {
  useEffect(() => {
    const initMap = () => {
      // Create a map instance and assign it to the global window object if needed elsewhere
      window.map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 41.83673, lng: -87.62597 },
        zoom: 15,
      });
    };

    if (window.google) {
      initMap();
    } else {
      window.initMap = initMap;
    }
  }, []);

  return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
};

export default GoogleMap;
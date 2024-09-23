import React, { useEffect, useRef } from 'react';

const GoogleMap = ({ additionalMarkers, aerialView }) => {
  const markersRef = useRef([]);
  const mapRef = useRef(null);
  const inputRef = useRef(null); // Ref for the search input

  useEffect(() => {
    // Initialize map function
    const initMap = () => {
      const center = { lat: 41.83530, lng: -87.62300 };
      const marker =  { lat: 41.83673, lng: -87.62597 };
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
      markersRef.current.forEach(marker => marker.setMap(null)); // Clear existing markers
      markersRef.current = []; // Reset markers array

      additionalMarkers.forEach((marker) => {
        const newMarker = new window.google.maps.Marker({
          position: marker.position,
          map: mapRef.current,
          title: marker.title || "Marker",
        });
        markersRef.current.push(newMarker); // Store new marker
      });
    }
  }, [additionalMarkers]); // Update markers whenever `additionalMarkers` changes

  useEffect(() => {
    // Update additional markers
    if (mapRef.current && additionalMarkers) {
      markersRef.current.forEach(marker => marker.setMap(null)); // Clear existing markers
      markersRef.current = []; // Reset markers array

      additionalMarkers.forEach((marker) => {
        const newMarker = new window.google.maps.Marker({
          position: marker.position,
          map: mapRef.current,
          title: marker.title || "Marker",
        });
        markersRef.current.push(newMarker); // Store new marker
      });
    }
  }, [additionalMarkers]); 

// const PARAMETER_VALUE = '1600 Amphitheatre Parkway, Mountain View, CA 94043';
// const API_KEY = 'INSERT_YOUR_API_KEY';

// async function initAerialView() {
//   const displayEl = document.querySelector('video');
//   displayEl.addEventListener('click', function () {
//     if (displayEl.paused) {
//       displayEl.play();
//     } else {
//       displayEl.pause();
//     }
//   });

//   // Parameter key can accept either 'videoId' or 'address' depending on input.
//   const parameterKey = videoIdOrAddress(PARAMETER_VALUE);
//   const urlParameter = new URLSearchParams();
//   urlParameter.set(parameterKey, PARAMETER_VALUE);
//   urlParameter.set('key', API_KEY);
//   const response = await fetch(`https://aerialview.googleapis.com/v1/videos:lookupVideo?${urlParameter.toString()}`);
//   const videoResult = await response.json();

//   if (videoResult.state === 'PROCESSING') {
//     alert('Video still processing..');
//   } else if (videoResult.error && videoResult.error.code === 404) {
//     alert('Video not found. To generate video for an address, call on Aerial view renderVideo method.');
//   } else {
//     displayEl.src = videoResult.uris.MP4_MEDIUM.landscapeUri
//   }
// }

// function videoIdOrAddress(value) {
//   const videoIdRegex = /[0-9a-zA-Z-_]{22}/;
//   return value.match(videoIdRegex) ? 'videoId' : 'address';
// }

// initAerialView();
  
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

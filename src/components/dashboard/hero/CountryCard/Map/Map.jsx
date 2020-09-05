import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import styles from './Map.module.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ2lyaXNoYXAiLCJhIjoiY2tlcHZ6aXZqMW9zYTJ6bXE5MzRubWZrcCJ9.Q6Yuvbz9a-KYEZfvQ-iMSg';

const Map = (props) => {
  const [map, setmap] = useState({ long: 5, lat: 34, xoom: 2 });

  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [5, 34],
      zoom: -0.15,
    });
    map.addControl(new mapboxgl.NavigationControl());

    map.on('move', () => {
      setmap({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
    return () => map.remove();
  }, []);

  return <div ref={mapContainer} className={styles.mapContainer} />;
};

export default Map;

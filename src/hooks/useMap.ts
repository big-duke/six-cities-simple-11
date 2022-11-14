/* eslint-disable no-console */
import { useState, useRef, useEffect, MutableRefObject } from 'react';
import leaflet, { Map } from 'leaflet';
import { Nullable, Location } from 'types';

type useMapType = {
  (mapRef: MutableRefObject<null>, center: Location): Nullable<Map>;
};

const useMap: useMapType = (mapRef, center) => {
  const [map, setMap] = useState<Nullable<Map>>(null);

  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      console.log('render map');
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: center.latitude,
          lng: center.longitude,
        },
        zoom: center.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
    map?.setView([center.latitude, center.longitude], center.zoom);
  }, [mapRef, center, map]);

  return map;
};

export default useMap;

import { useState, useRef, useEffect, MutableRefObject } from 'react';
import leaflet, { Map } from 'leaflet';
import { Offer , Nullable } from 'types';

type useMapType = {
  (mapRef: MutableRefObject<null>, offer: Offer) : Nullable<Map>;
};

const useMap:useMapType = (mapRef, offer) => {
  const [map, setMap] = useState<Nullable<Map>>(null);
  const location = offer.city.location;
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
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
  }, [mapRef, location]);

  return map;
};

export default useMap;

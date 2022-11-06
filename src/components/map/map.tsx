/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import useMap from 'hooks/useMap';
import { Location } from 'types';
import 'leaflet/dist/leaflet.css';
import { defaultIcon } from './const';


type MapProps = {
  center: Location;
  points: Location[];
}
export default function Map({ center, points }: MapProps): JSX.Element {
  const mapRef = useRef(null);

  const map = useMap(mapRef, center);
  // eslint-disable-next-line no-console
  console.log(points);
  useEffect(() => {
    if (map) {
      points.forEach(({ latitude, longitude }) => {
        leaflet
          .marker({
            lat: latitude,
            lng: longitude,
          })
          .setIcon(defaultIcon)
          .addTo(map);
      });
    }
  }, [map, points]);
  return (
    <div
      ref={mapRef}
      className="cities__map"
    >
    </div>
  );
}

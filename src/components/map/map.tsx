/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import useMap from 'hooks/useMap';
import { Location, Point } from 'types';
import 'leaflet/dist/leaflet.css';
import { activeIcon, defaultIcon } from './const';


type MapProps = {
  center: Location;
  points: Point[];
  activePointId?: number;
}
export default function Map({ center, points, activePointId }: MapProps): JSX.Element {
  const mapRef = useRef(null);

  const map = useMap(mapRef, center);
  useEffect(() => {
    if (map) {
      points.forEach(({ id, latitude, longitude }) => {
        leaflet
          .marker({
            lat: latitude,
            lng: longitude,
          })
          .setIcon(id === activePointId ? activeIcon : defaultIcon)
          .addTo(map);
      });
    }
  }, [activePointId, map, points]);
  return (
    <div
      ref={mapRef}
      className="cities__map"
    >
    </div>
  );
}

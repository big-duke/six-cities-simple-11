import { useRef } from 'react';
import useMap from 'hooks/useMap';
import { offers } from 'mock';
import 'leaflet/dist/leaflet.css';

export default function Map ():JSX.Element {
  const mapRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const map = useMap(mapRef, offers[0]);
  return (
    <div
      ref={mapRef}
      className="cities__map"
    >
    </div>
  );
}

'use client';

import { Marker } from 'leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';

const iconClass =
  'bg-emerald-700 hover:bg-emerald-600 border-2 border-transparent hover:border-black/30 text-black text-lg font-extrabold p-2 rounded-xl';

interface Controls {
  handleProcess: () => Promise<void>;
  mapMarker: Marker;
}

function roundCoordinate(num: number): string {
  return num.toFixed(3);
}

export default function Controls({ handleProcess, mapMarker }: Controls) {
  return (
    <div className="flex w-full flex-row items-center justify-between px-2">
      <button className={`${iconClass} w-full px-2`} onClick={handleProcess}>
        <div className="flex w-full flex-row items-center justify-between px-2">
          <FaMapMarkerAlt className="text-black" size={24} strokeWidth={2.5} />
          <div className="flex-grow">
            <h1>Lat: {roundCoordinate(mapMarker.getLatLng().lat)}</h1>
          </div>
          <div className="flex-grow">
            <h1>Lon: {roundCoordinate(mapMarker.getLatLng().lng)}</h1>
          </div>
        </div>
      </button>
    </div>
  );
}

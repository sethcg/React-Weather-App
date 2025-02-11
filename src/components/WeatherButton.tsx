'use client';

import { Marker } from 'leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';

const iconClass =
  'bg-slate-500 hover:bg-slate-700 text-black text-lg font-extrabold p-2 rounded-xl';

interface Controls {
  handleProcess: () => Promise<void>;
  mapMarker: Marker;
}

function roundCoordinate(num: number | undefined): string {
  return num ? num.toFixed(3) : '';
}

export default function Controls({ handleProcess, mapMarker }: Controls) {
  return (
    <div className="flex w-full flex-row items-center justify-between px-2">
      <button className={`${iconClass} w-full px-2`} onClick={handleProcess}>
        <div className="flex w-full flex-row items-center justify-between px-2">
          <FaMapMarkerAlt size={24} strokeWidth={2.5} />
          <div className="flex-grow">
            <h1>Lat: {roundCoordinate(mapMarker?.getLatLng().lat)}</h1>
          </div>
          <div className="flex-grow">
            <h1>Lon: {roundCoordinate(mapMarker?.getLatLng().lng)}</h1>
          </div>
        </div>
      </button>
    </div>
  );
}

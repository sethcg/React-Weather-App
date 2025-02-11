'use client';

import { useState } from 'react';
import { icon, IconOptions, latLng, marker, Marker, MarkerOptions } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import MapData from './MapData';
import MapComponent from './Map';

const iconOptions: IconOptions = {
  iconUrl: '/map-marker.svg',
  iconSize: [24, 24],
  iconAnchor: [12, 24],
};

export default function Map() {
  const markerOptions: MarkerOptions = { icon: icon(iconOptions) };
  const [mapMarker, setMapMarker] = useState<Marker>(marker(latLng(0, 0), markerOptions));
  const setMarker = (marker: Marker) => setMapMarker(marker);

  return (
    <div className="flex min-h-[calc(100vh-68px)] w-full gap-12 px-12 py-12 pb-16">
      <MapComponent markerOptions={markerOptions} setMapMarker={setMarker} />
      <MapData mapMarker={mapMarker} />
    </div>
  );
}

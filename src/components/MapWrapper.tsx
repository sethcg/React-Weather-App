'use client';

import { RefObject, useEffect, useRef, useState } from 'react';
import {
  icon,
  IconOptions,
  LatLng,
  latLng,
  latLngBounds,
  LeafletMouseEvent,
  Map as LeafletMap,
  map,
  MapOptions,
  marker,
  Marker,
  MarkerOptions,
  tileLayer,
  TileLayerOptions,
} from 'leaflet';

import 'leaflet/dist/leaflet.css';
import MapData from './MapData';
import { MapComponent } from './Map';

const url: string = `https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png`;

const options: MapOptions = {
  center: latLng(38, -99),
  minZoom: 3,
  maxZoom: 18,
  zoom: 5,
  zoomSnap: 0.3,
};

const tileOptions: TileLayerOptions = {
  tileSize: 512,
  zoomOffset: -1,
  minZoom: 1,
  crossOrigin: true,
  noWrap: true,
};

const iconOptions: IconOptions = {
  iconUrl: '/map-marker.svg',
  iconSize: [24, 24],
  iconAnchor: [12, 24],
};

export default function MapWrapper() {
  const markerOptions: MarkerOptions = { icon: icon(iconOptions) };
  const [mapMarker, setMapMarker] = useState<Marker>(marker(latLng(0, 0), markerOptions));

  const mapObject: RefObject<LeafletMap | null> = useRef(null);

  const addMarker = async (latLng: LatLng) => {
    if (!mapObject.current) return;
    setMapMarker(marker(latLng, markerOptions).addTo(mapObject.current));
  };

  const removeMarker = async () => {
    if (!mapObject.current) return;
    mapObject.current.getPane('markerPane')?.replaceChildren();
    setMapMarker(marker(latLng(0, 0), markerOptions));
  };

  useEffect(() => {
    mapObject.current = map('map', options);

    const bounds = latLngBounds(latLng(-90, -180), latLng(90, 180));
    mapObject.current.setMaxBounds(bounds);

    mapObject.current.on('click', function (event: LeafletMouseEvent) {
      removeMarker();
      addMarker(event.latlng);
    });

    tileLayer(url, tileOptions).addTo(mapObject.current);
    // This ensures that mapObject is only created once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapObject]);

  return (
    <div className="flex min-h-[calc(100vh-68px)] w-full gap-6 px-12 py-12 pb-16">
      <MapComponent />
      <MapData mapMarker={mapMarker} removeMarker={removeMarker} />
    </div>
  );
}

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
  MapOptions,
  marker,
  Marker,
  MarkerOptions,
  tileLayer,
  TileLayerOptions,
} from 'leaflet';

import 'leaflet/dist/leaflet.css';
import MapData from './MapData';
import MapComponent from './MapComponent';

const url: string = `https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png`;

const options: MapOptions = {
  center: latLng(38, -99),
  minZoom: 3,
  maxZoom: 14,
  zoom: 5,
  zoomDelta: 0.75,
  zoomSnap: 0.5,
};

const tileOptions: TileLayerOptions = {
  tileSize: 512,
  zoomOffset: -1,
  minZoom: 1,
  crossOrigin: true,
  noWrap: true,
};

const iconOptions: IconOptions = {
  iconUrl: '/marker-icon.png',
  iconSize: [18, 30],
  iconAnchor: [12, 30],
  popupAnchor: [1, -25],
  // shadowUrl: '/marker-shadow.png',
  // shadowSize: [30, 30]
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
    mapObject.current.getPane('shadowPane')?.replaceChildren();
    setMapMarker(marker(latLng(0, 0), markerOptions));
  };

  const zoomToMarker = async (latLng: LatLng) => {
    if (!mapObject.current) return;
    const zoomMin: number = 6;
    const zoomMax: number = 11;
    const currentZoom: number = mapObject.current.getZoom();
    // clamp the zoom to prevent too large of a jump.
    const zoomLevel: number = Math.min(Math.max(currentZoom, zoomMin), zoomMax);
    mapObject.current.setView(latLng, zoomLevel);
  };

  useEffect(() => {
    mapObject.current?.remove();
    mapObject.current = new LeafletMap('map', options);

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
      <MapData mapMarker={mapMarker} removeMarker={removeMarker} zoomToMarker={zoomToMarker} />
    </div>
  );
}

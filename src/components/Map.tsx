'use client';

import { useEffect, RefObject, useRef } from 'react';
import { Map as LeafletMap, map, Marker, marker, MarkerOptions, IconOptions, icon } from 'leaflet';
import {
  latLng,
  latLngBounds,
  tileLayer,
  MapOptions,
  TileLayerOptions,
  LeafletMouseEvent,
} from 'leaflet';

import Controls from './Controls';

import 'leaflet/dist/leaflet.css';

export default function Map() {
  const url: string = `https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png`;

  const options: MapOptions = {
    center: latLng(38.20365531807151, -99.71191406250001),
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
  const markerOptions: MarkerOptions = { icon: icon(iconOptions) };
  const mapMarker: RefObject<Marker | null> = useRef(marker(latLng(0, 0), markerOptions));

  const mapObject: RefObject<LeafletMap | null> = useRef(null);

  useEffect(() => {
    mapObject.current = map('map', options);

    const bounds = latLngBounds(latLng(-90, -180), latLng(90, 180));
    mapObject.current.setMaxBounds(bounds);

    mapObject.current.on('click', function (event: LeafletMouseEvent) {
      if (mapObject.current === null) return;

      // Remove previous Marker, if necessary
      if (mapMarker.current) {
        mapMarker.current.removeFrom(mapObject.current);
      }

      // Create Marker
      mapMarker.current = marker(event.latlng, markerOptions).addTo(mapObject.current);
    });

    tileLayer(url, tileOptions).addTo(mapObject.current);
  });

  return (
    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 w-full min-h-[calc(100vh-52px)] ps-12 py-6">
      <div className="col-span-2 relative size-full flex justify-start items-center">
          <div id="map" className="size-[calc(100%-4rem)] border-4 border-neutral-800" />
      </div>
      <Controls markerRef={mapMarker} />
    </div>
  );
}

'use client';

import { useEffect, RefObject, useRef } from 'react';
import { Map as LeafletMap, map, Marker, marker, MarkerOptions } from 'leaflet';
import {
  latLng,
  latLngBounds,
  tileLayer,
  MapOptions,
  TileLayerOptions,
  LeafletMouseEvent,
} from 'leaflet';

import 'leaflet/dist/leaflet.css';

interface Map {
  setMapMarker: (marker: Marker) => void;
  markerOptions: MarkerOptions;
}

export default function MapData({ markerOptions, setMapMarker }: Map) {
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

  const mapObject: RefObject<LeafletMap | null> = useRef(null);

  useEffect(() => {
    mapObject.current = map('map', options);

    const bounds = latLngBounds(latLng(-90, -180), latLng(90, 180));
    mapObject.current.setMaxBounds(bounds);

    mapObject.current.on('click', function (event: LeafletMouseEvent) {
      if (!mapObject.current) return;

      // Remove previous marker
      mapObject.current.getPane('markerPane')?.replaceChildren();

      // Create new marker
      setMapMarker(marker(event.latlng, markerOptions).addTo(mapObject.current));
    });

    tileLayer(url, tileOptions).addTo(mapObject.current);
    // This ensures that mapObject is only created once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapObject]);

  return (
    <div className="relative min-h-[calc(100%-4rem)] w-full flex-grow">
      <div id="map" className="size-full border-4 border-neutral-800" />
    </div>
  );
}

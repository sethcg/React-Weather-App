'use client';

import { Component } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MapProps {}

export class MapComponent extends Component<MapProps> {
  constructor(props: MapProps) {
    super(props);
  }

  render() {
    return (
      <div className="relative min-h-[calc(100%-4rem)] w-full flex-grow">
        <div id="map" className="size-full border-4 border-neutral-800" />
      </div>
    );
  }
}
